import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/preorder");
  }, []);

  return null;
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
