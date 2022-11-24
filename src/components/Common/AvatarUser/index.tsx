type Props = {
  imgSrc: string;
};

const AvatarUser = ({ imgSrc }: Props) => {
  return (
    <img
      src={
        imgSrc ||
        "https://i.pinimg.com/564x/f0/3c/4f/f03c4fd2cd19f63ad1e76e899d73882f.jpg"
      }
      className="rounded-full object-cover h-10 w-10"
    />
  );
};

export default AvatarUser;
