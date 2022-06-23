import { GetStaticProps } from "next";
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
  pagination: {
    current: number;
    pages: number;
  };
};
export default function Index({ posts, tags, pagination }: Props) {
  const url = "/posts";
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

export const getStaticProps: GetStaticProps = async () => {
  const posts = listPostContent(1, config.posts_per_page);
  const tags = listTags();
  const pagination = {
    current: 1,
    pages: Math.ceil(countPosts() / config.posts_per_page),
  };
  return {
    props: {
      posts,
      tags,
      pagination,
    },
  };
};
