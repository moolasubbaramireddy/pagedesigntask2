import React from "react";

const NavLinks = () => {
  const links = [
    {
      name: "Products",
      Submenu: true,
      sublinks: [
        {
          Head: "topwear",
          sublink: [
            { name: "T-shirt" },
            { name: "Casual Shirts" },
            { name: "Formal Shirts" },
            { name: "Formal Shirts" },
            { name: "Formal Shirts" },
          ],
        },
        {
            Head: "ButtomWear",
            sublink: [
              { name: "T-shirt" },
              { name: "Casual Shirts" },
              { name: "Formal Shirts" },
              { name: "Formal Shirts" },
              { name: "Formal Shirts" },
            ],
          },
          {
            Head: "innerwear",
            sublink: [
              { name: "T-shirt" },
              { name: "Casual Shirts" },
              { name: "Formal Shirts" },
              { name: "Formal Shirts" },
              { name: "Formal Shirts" },
            ],
          },
          {
            Head: "sleepwear",
            sublink: [
              { name: "T-shirt" },
              { name: "Casual Shirts" },
              { name: "Formal Shirts" },
              { name: "Formal Shirts" },
              { name: "Formal Shirts" },
            ],
          },
          {
            Head: "footwear",
            sublink: [
              { name: "T-shirt" },
              { name: "Casual Shirts" },
              { name: "Formal Shirts" },
              { name: "Formal Shirts" },
              { name: "Formal Shirts" },
            ],
          },
      ],
    },
    { name: "Templates", },
    { name: "Pricing" },
    { name: "Reviews" },
  ];
  return (
    <>
      {links.map((item) => (
        <div>
          <div className="px-3 test-left md:cursor-pointer group">
            <h1 className="py-7">{item.name}</h1>
            {item.Submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:block hover:block">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                  </div>
                  <div className="bg-white p-5 grid grid-cols-3 gap-10 ">
                    {item.sublinks.map((itemlinks) => (
                      <div>
                        <h1 className="taxt-lg font-semibold">
                          {itemlinks.Head}{" "}
                        </h1>
                        {itemlinks.sublink.map((slink) => (
                          <li className="text-sm text-gray-600 my-2.5">
                            {slink.name}
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
