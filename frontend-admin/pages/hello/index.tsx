import { GetServerSideProps } from "next";

type Props = {
  message: string;
};

export default function Hello({ message }: Props) {
  return (
    <>
      <h1>{message}</h1>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  console.log(process.env.NEXT_PUBLIC_API_BASE_URL);
  console.log(process.env.APP_ENV);
  const response = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL as string);
  const json = await response.json();
  return {
    props: json,
  };
};
