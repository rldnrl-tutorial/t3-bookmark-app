import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { getSession } from 'next-auth/react'
import toast, { Toaster } from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { trpc } from '../utils/trpc'
import { type LinkSchema } from '../schema/link/link.schema'

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {
      session: await getSession(ctx),
    },
  }
}

const Admin = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  console.log(props.session)
  const { register, handleSubmit, reset } = useForm<LinkSchema>()
  const linkMutation = trpc.useMutation(['protected-link.create'], {
    onSuccess: () => reset(),
  })

  const onSubmit = async (data: LinkSchema) => {
    const { title, url, category, description } = data
    const imageUrl = `https://via.placeholder.com/300`
    const variables = { title, url, category, description, imageUrl }
    try {
      await toast.promise(linkMutation.mutateAsync(variables), {
        loading: 'Creating new link..',
        success: 'Link successfully created!🎉',
        error: `Something went wrong 😥 Please try again -  ${linkMutation.error?.message}`,
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="container mx-auto max-w-md py-12">
      <Toaster />
      <h1 className="text-3xl font-medium my-5">Create a new link</h1>
      <form
        className="grid grid-cols-1 gap-y-6 shadow-lg p-8 rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="block">
          <span className="text-gray-700">Title</span>
          <input
            {...register('title', { required: true })}
            placeholder="Title"
            type="text"
            name="title"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Description</span>
          <input
            {...register('description', { required: true })}
            placeholder="Description"
            name="description"
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Url</span>
          <input
            {...register('url', { required: true })}
            placeholder="https://example.com"
            name="url"
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Category</span>
          <input
            {...register('category', { required: true })}
            placeholder="Name"
            name="category"
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>

        <button
          disabled={linkMutation.isLoading}
          type="submit"
          className="my-4 capitalize bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600"
        >
          {linkMutation.isLoading ? (
            <span className="flex items-center justify-center">
              <svg
                className="w-6 h-6 animate-spin mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
              </svg>
              Creating...
            </span>
          ) : (
            <span>Create Link</span>
          )}
        </button>
      </form>
    </div>
  )
}

export default Admin
