import React from "react";
import Container from "./Container";
import { Download, Loan, ReceiveLoan, Repay } from "./vectors";
import MemberCard from "./card/MemberCard";

const BecomeMember = () => {
  return (
    <main className="bg-white my-20 ">
      <Container>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-center text-black">
            Become a Member of Happimoni
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10 w-full">
            {memberList.map((list, index) => (
              <MemberCard {...list} key={index} />
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
};

const memberList = [
  {
    title: "Download",
    icon: <Download />,
  },
  {
    title: "Apply for a Loan",
    icon: <Loan />,
  },
  {
    title: "Receive Loan",
    icon: <ReceiveLoan />,
  },
  {
    title: "Repay loan",
    icon: <Repay />,
  },
];

export default BecomeMember;
