import SignInComponent from "@components/Common/SignInComponent";
import { getProviders } from "next-auth/react";
import Image from "next/image";

type Props = {};

const SignIn = async (props: Props) => {
  const providers = await getProviders();
  return (
    <div className="flex flex-col items-center mt-[20px]">
      <div>
        <Image
          alt="Avatar picture"
          src="https://links.papareact.com/161"
          width={300}
          height={300}
          className="rounded-full mx-2 object-cover"
        />
      </div>
      <SignInComponent providers={providers} />
    </div>
  );
};

export default SignIn;
