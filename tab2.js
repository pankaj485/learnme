export default function Blog({
  data: { lastPage, blogPosts, banner, blogBannerImage },
}) {
  return (
    <Layout>
      {console.log("this is working now i guess")}
      <div className="blog-index">
        {banner?.blog && (
          <BlogIndexPageHeader
            {...{ data: banner?.blog, image: blogBannerImage }}
          />
        )}
        <BlogPosts {...{ lastPage, blogPosts }} />
      </div>
    </Layout>
  );
}
