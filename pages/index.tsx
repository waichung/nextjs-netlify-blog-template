import { GetStaticProps } from "next";
import Container from "@/components/container";
import MoreStories from "@/components/more-stories";
import HeroPost from "@/components/hero-post";
import Intro from "@/components/intro";
import Layout from "@/components/layout";
import Head from "next/head";
import { countPosts, listPostContent, PostContent } from "lib/posts";
import { listTags, TagContent } from "lib/tags";
import config from "lib/config";
import PostList from "src/components/PostList";
import { useEffect } from "react";

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
  preview: any;
};

export default function Index({
  posts = [],
  tags,
  pagination,
  preview,
}: Props) {
  const heroPost = posts[0];
  const morePosts = posts.slice(1);

  useEffect(() => {
    if (window.location.href.includes("invite_token")) {
      window.location.href = window.location.href.replace(
        "#invite_token",
        "admin/#invite_token"
      );
    }
  }, []);
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with TEST</title>
        </Head>
        <Intro />
        <Container>
          {/* {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
          <PostList posts={posts} tags={tags} pagination={pagination} />
        </Container>
      </Layout>
    </>
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
