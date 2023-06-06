import { createClient } from "@libsql/client/web";

const client = createClient({
  url: process.env.LIBSQL_DB_URL!,
  authToken: process.env.LIBSQL_DB_AUTH_TOKEN,
});

export default async function Resolver() {
  const { rows } = await client.execute("select * from users");

  return rows || [];
}
