import useFetch from "../lib/useFetch";

function getData(data) {
  if (!data || data.errors) return null;
  return data.data;
}

function getErrorMessage(error, data) {
  if (error) return error.message;
  if (data && data.errors) {
    return data.errors[0].message;
  }
  return null;
}

/**
|--------------------------------------------------
| This GraphQL query returns an array of Guestbook
| entries complete with both the provided and implicit
| data attributes.
|
| Learn more about GraphQL: https://graphql.org/learn/
|--------------------------------------------------
*/
export const useAnunturi = () => {
  const query = `query Anunturi($size: Int) {
    allAnunts(_size: $size) {
      data {
        _id
        _ts
        title,
        imgUrl,
      }
      after
    }
  }`;
  const size = 100;
  const { data, error } = useFetch(process.env.faunaDbGraphQlEndpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.faunaDbSecret}`,
      "Content-type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query,
      variables: { size },
    }),
  });

  return {
    data: getData(data),
    errorMessage: getErrorMessage(error, data),
    error,
  };
};

/**
|--------------------------------------------------
| This GraphQL mutation creates a new GuestbookEntry
| with the requisite twitter handle and story arguments.
|
| It returns the stored data and includes the unique
| identifier (_id) as well as _ts (time created).
|
| The guestbook uses the _id value as the unique key
| and the _ts value to sort and display the date of
| publication.
|
| Learn more about GraphQL mutations: https://graphql.org/learn/queries/#mutations
|--------------------------------------------------
*/
export const createAnunt = async (title) => {
  const query = `mutation CreateAnunt($title: String!) {
    createAnunt(data: {
      title: $title
    }) {
      _id
      _ts
      title
    }
  }`;

  const res = await fetch(process.env.faunaDbGraphQlEndpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.faunaDbSecret}`,
      "Content-type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query,
      variables: { title },
    }),
  });
  const data = await res.json();

  return data;
};
