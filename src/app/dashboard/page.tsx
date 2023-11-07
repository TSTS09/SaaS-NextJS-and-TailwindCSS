import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/dist/server";
import { useRouter } from 'next/router';

const Page = () => {
  const { getUser } = getKindeServerSession();
  const router = useRouter();

  // Use an async function to await the getUser promise
  const checkUser = async () => {
    const user = await getUser();

    if (!user || !user.id) {
      router.push('/auth-callback?origin=dashboard');
    }
  };

  // Call the async function to check the user
  checkUser();

  return <div>Loading...</div>; // Display a loading message until user status is determined
};

export default Page;
