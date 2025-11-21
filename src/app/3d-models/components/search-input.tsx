import Form from 'next/form'

export default function SearchInput() {
    return (
        <Form action='/3d-models'>
            <input
                type="text"
                placeholder="Search 3D Models..."
                name="query"
                className='border border-gray-500 rounded-lg px-4 py-2'
            />
        </Form>
    )
}