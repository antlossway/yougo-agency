// wordpress rest API

import { myAxios } from "@/lib/myAxios";
import qs from "qs";
import { postType, postsType } from "../../data";

// example query
//https://example.com/wp-json/wp/v2/posts?categories=13&per_page=100

// yoursite.com/wp-json/wp/v2/posts?orderby=date&order=desc
// the number of posts is included in reseponse HTTP header
// res.headers.get("x-wp-totalpages") || 0;

//search post by tags
//https://13.212.76.243/wp-json/wp/v2/posts?tags=4

export async function getCountryGuide(countryName: string) {
  const query = qs.stringify(
    {
      slug: countryName, //thailand
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await myAxios.get(`/countries?_embed&${query}`);
  //   const res = await myAxios.get(`/posts`);
  const data = res.data;

  // country intro
  const article = data[0].content.rendered;

  // country info
  const infos: [string, string][] = Object.entries(data[0].acf);
  // data[0].acf => object
  // {
  //   visa: "content of visa",
  //   cost: "cost of living",
  //   ....
  // }

  // infos => array
  // [
  //   ['visa', 'content of visa'],
  //   ['cost': 'cost of living']
  // ]

  const topics = Object.keys(data[0].acf);
  const featuredImgUrl = data[0]._embedded["wp:featuredmedia"]["0"].source_url;
  // console.log(topics);

  const result = {
    article, // content of article
    infos, // array of arry for each topic
    topics, // list of topics
    featuredImgUrl,
  };

  // console.log(result);

  return result;
}

const extractDataFromPosts = (posts: any) => {
  const postsData = posts.map((post: any) => {
    return {
      slug: post?.slug,
      title: post?.title.rendered,
      // content: post?.content.rendered,
      excerpt: post?.excerpt.rendered,
      featuredImgUrl: post?.acf.featured_image_url,
      category: parseInt(post?.categories[0]),
    };
  });

  return postsData;
};

export async function getAllPosts() {
  // const res = await myAxios.get("/posts?_embed");
  const res = await myAxios.get("/posts");
  const data = res.data;
  const posts = extractDataFromPosts(data);

  const totalNumOfPost = parseInt(res.headers["x-wp-total"]);
  // console.log(numOfPost);

  const result = {
    posts: posts,
    totalNumOfPost,
  };
  // console.log(result);
  return result;
}

//below is using the result of getAllPosts to extract array of categories(number)
// export async function getCategories(): Promise<number[]> {
//   const { posts, totalNumOfPost } = await getAllPosts(); //deduped

//   if (!posts) return [];

//   const categories = new Set<number>(
//     posts.map((post: postType) => post.category).flat()
//   );

//   return Array.from(categories);
// }

// Map is hashTable, can get the name of category from number
export async function getCategories(): Promise<Map<number, string>> {
  const res = await myAxios.get("/categories?_fields=id,slug");
  const data = res.data;
  const categoryMap = new Map();
  data.forEach((item: any) => {
    categoryMap.set(item.id, item.slug);
  });

  // console.log(categoryMap, typeof categoryMap);
  return categoryMap;
}

export async function getSinglePost(slug: string) {
  const query = qs.stringify(
    {
      slug: slug,
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await myAxios.get(`/posts?${query}`);
  const post = res.data[0];
  // console.log(post);

  return {
    slug: post?.slug,
    title: post?.title.rendered,
    content: post?.content.rendered,
    excerpt: post?.excerpt.rendered,
    // featuredImgUrl: post?.acf.featured_image_url,
    category: parseInt(post?.categories[0]),
  };
}
