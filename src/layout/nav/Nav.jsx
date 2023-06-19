import "./nav.css";
export const Nav = () => {
  return (
    <>
      <div className="h-20 border-b-2 flex">
        <div className="flex justify-center items-center mx-10 ">
          <a href="/">
            <span className="font-bold text-3xl ">STORE</span>
          </a>
        </div>
        <ul className="flex h-full w-full items-center gap-20  ">
          <li className="link link-underline link-underline-black">
            <a href="/collections">Collections</a>
          </li>
          <li className="link link-underline link-underline-black">
            <a href="/men">Men</a>
          </li>
          <li className="link link-underline link-underline-black">
            <a href="/women">Women</a>
          </li>
          <li className="link link-underline link-underline-black">
            <a href="/about">About</a>
          </li>
          <li className="link link-underline link-underline-black">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};
