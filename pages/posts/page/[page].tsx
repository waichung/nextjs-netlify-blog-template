import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "components/layout";
import BasicMeta from "src/components/meta/BasicMeta";
import OpenGraphMeta from "src/components/meta/OpenGraphMeta";
import TwitterCardMeta from "src/components/meta/TwitterCardMeta";
import PostList from "src/components/PostList";
import config from "lib/config";
import { countPosts, listPostContent, PostContent } from "lib/posts";
import { listTags, TagContent } from "lib/tags";
import Container from "@/components/container";
import Intro from "@/components/intro";

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  page: number;
  pagination: {
    current: number;
    pages: number;
  };
};
export default function Page({ posts, tags, pagination, page }: Props) {
  const url = `/posts/page/${page}`;
  const title = "All posts";
  return (
    <Layout preview={null}>
      <Container>
        <Intro />
        <BasicMeta url={url} title={title} />
        <OpenGraphMeta url={url} title={title} />
        <TwitterCardMeta url={url} title={title} />
        <PostList posts={posts} tags={tags} pagination={pagination} />
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = parseInt(params.page as string);
  const posts = listPostContent(page, config.posts_per_page);
  const tags = listTags();
  const pagination = {
    current: page,
    pages: Math.ceil(countPosts() / config.posts_per_page),
  };
  return {
    props: {
      page,
      posts,
      tags,
      pagination,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = Math.ceil(countPosts() / config.posts_per_page);
  const paths = Array.from(Array(pages - 1).keys()).map((it) => ({
    params: { page: (it + 2).toString() },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};
