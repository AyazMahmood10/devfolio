import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <section>
        <h2 className="mb-4 text-2xl font-bold">New Section</h2>
        <div className="space-y-4">
          <div className="rounded bg-gray-700 p-4">
            <h3 className="text-lg font-bold">
              Some Text about something
              <span className="ml-2 text-sm text-pink-500">NEW</span>
            </h3>
            <p className="text-gray-400">Content</p>
          </div>
          <div className="rounded bg-gray-700 p-4">
            <h3 className="text-lg font-bold">Some Text about something</h3>
            <p className="text-gray-400">Content</p>
          </div>
        </div>
      </section>
      <section className="mt-8">
        <h2 className="mb-4 text-2xl font-bold">New Section</h2>
        <div className="space-y-4">
          <div className="rounded bg-gray-700 p-4">
            <h3 className="text-lg font-bold">Some text</h3>
            <p className="text-gray-400">Content</p>
          </div>
          <div className="rounded bg-gray-700 p-4">
            <h3 className="text-lg font-bold">Some text</h3>
            <p className="text-gray-400">Content</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
