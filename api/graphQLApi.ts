import { TypedDocumentString } from "@/gql/graphql";

type GraphQLResponse<T> =
  | { data?: undefined; errors: { message: string }[] }
  | { data: T; errors?: undefined };

type PageItem = {
  Title: string;
};

type PagesGraphqlResponse = {
  pages: {
    data: {
      id: string;
      attributes: PageItem;
    }[];
  };
};

export async function ExecuteGraphql<TResult, TVariables>(
  query: TypedDocumentString<TResult, TVariables>,
  variables: TVariables
): Promise<TResult> {
  if (!process.env.GRAPHQL_URL) {
    throw TypeError("GRAPHQL_URL is not defined");
  }
  const res = await fetch(process.env.GRAPHQL_URL, {
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;
  if (graphqlResponse.errors) {
    throw TypeError(`GrapQL Error`, { cause: graphqlResponse.errors });
  }

  return graphqlResponse.data;
}
