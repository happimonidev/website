"use client";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import Container from "./Container";

export default function FaqSection() {
  const [openQuestions, setOpenQuestions] = useState({});

  const faqs = [
    {
      group: "Happimoni Financial Literacy",
      items: [
        {
          question: "Borrow only what you can repay",
          answer: [
            `Make sure you understand exactly what it means if you borrow money. You must ask the creditor to give you all the information. The creditor must give you all the information in language that you can understand.`,
          ],
        },
        {
          question: "Before you borrow money.",
          answer: [
            `Remember it is cheaper to repay loans over a shorter period.`,
            `Ask what the fee rate is and work out what this means for you.`,
            `Compare fee rates.`,
            `Look at the small print, which explains all the terms and conditions.`,
            `Remember that fee rates could change, and your installment could increase.`,
            `Calculate extra costs like administration fees into your installment.`,
          ],
        },
        {
          question: "Keep your Pin private",
          answer: `Never give your details over the phone unless you called the person or know exactly who you are talking to.`,
        },
      ],
    },
    {
      group: "Eligibility Criteria",
      items: [
        {
          question: "Who can apply for a loan?",
          answer: `Happimoni does not limit your work, income, or other conditions. So long as you are 18-55 years old, all you need is an Android device and IOS device, a data connection, a means of identification, as well as valid bank account and card.`,
        },
        {
          question: "Can I get a refund?",
          answer: "Yes, refunds are available within 30 days of purchase.",
        },
      ],
    },
    {
      group: "Loan Offers",
      items: [
        {
          question: "How to deactivate my DND status?",
          answer: [
            `1.Text START to 2442 on your ETISALAT number that has stopped receiving Bulk SMS.`,
            `2.Text ALLOW to 2442 on your MTN number that has stopped receiving Bulk SMS.`,
            `3.Text CANCEL to 2442 on your GLO number that has stopped receiving Bulk SMS.`,
            `4.Text ALLOW to 2442 on your AIRTEL number that has stopped receiving Bulk SMS.`,
            `(It has been discovered that MTN and AIRTEL networks have imposed DND without subscribers’ consent but you can still confirm by texting STATUS to 2442).`,
            `5. In case of these codes don’t work, kindly call our Customer Care. (Airtel 111 or 121, MTN 180, Etisalat 200, GLO 121 or 200).`,
          ],
        },
        {
          question: "What information do I need to provide?",
          answer:
            "Simply follow the instructions by answering all the questions as asked. Make sure to provide authentic information about yourself.",
        },
        {
          question: "How to fill your relationship contact's information?",
          answer:
            "Your relationship contact is the person who can prove your reliability, credibility and honesty. We may contact him/her when we decide the loan. Please fill the relationship contact's information carefully.",
        },
        {
          question: "How long does the application process take?",
          answer: "The process takes a few minutes.",
        },
        {
          question:
            "How does Happimoni decide whether to give me a loan or not?",
          answer:
            "Happimoni uses data from your phone including your handset details and financial transaction messages , and your reason for borrowing. We combine these together with your Happimoni repayment history to build an individualised credit score and determine the suitable loan offer for you",
        },
        {
          question: "What is the maximum loan amount one can receive?",
          answer:
            "It differs by individual, so please ensure your information is accurate, and you are applying with your personal mobile device. then you may get a large loan amount.",
        },
        {
          question:
            "What is the Interest charged on loan? What is the maximum period of the loan?",
          answer:
            "The Interest charged is 1.2% per day for a fixed term of 7 days.",
        },
        {
          question: "I don't know my BVN. What should I do?",
          answer:
            "Just dial *565*0#. Please note: This will only works if you are making the request from the same phone number currently linked to your bank account.",
        },
      ],
    },
    {
      group: "Card Setup",
      items: [
        {
          question:
            "My bank card is declined when I tried to complete card setup. What shoud I do?",
          answer: [
            `This may casued by the listed reasons:`,
            `1. You have insufficient funds in your related bank card. Please ensure you have at least ₦50 in the bank card for setup.`,
            `2. You haven't activated your card for online transactions. For card activation instructions, please contact your bank.`,
            `3. Details input may be incorrect: please check the card number, expiry date and CVV provided to be sure all information is valid.`,
            `4. You are attempting to setup a card which has already used by another Happimoni customer.`,
            `We currently support multiple bank cards setup, if you still have issues with bank card setup, please send us a message and we are glad to help you.`,
          ],
        },
      ],
    },
    {
      group: "Loan Repayment",
      items: [
        {
          question: "How to repay the loan?",
          answer: [
            `We've made it as easy as possible for you to repay your loan, here are ways of paying an Happimoni loan.`,
            `1.We will auto debit due amount at repayment date direct from your bank card . Make sure the card has sufficient balance before due date.`,
            `2.You can pay via the App by clicking the "Make a Repayment" button.`,
          ],
        },
        {
          question: "How can I make an early repayment?",
          answer: [
            `If you want to make a payment prior to your due date, please click the 'Make a Repayment' button that appears on the 'My Loan' page of the app.`,
            `Late loan repayments automatically incur a rollover interest of 2% per day. It is therefore advised that one does not exceed the repayment period. Furthermore, this could reduce your future borrowing credit score.`,
            `2.You can pay via the App by clicking the "Make a Repayment" button.`,
          ],
        },
      ],
    },
    {
      group: "Security and Privacy",
      items: [
        {
          question: "Why do you need permission to access my device?",
          answer: `Happimoni will access your mobile device for the permission of (but not limited to )contacts, location,SMS,calendar and camera to estimate the suitable loan offer for you. It is a very important part of evaluation process.`,
        },
        {
          question: "Can I trust Happimoni with my infomation?",
          answer: `We promise that we will never disclose your personal information to third parties without your consent. (exempted late refund and service requirement)`,
        },
      ],
    },
    {
      group: "Contacts Us",
      items: [
        {
          question: "Need help?",
          answer: [
            `If you have any questions, you can contact us with following ways:`,
            `Phone number: 07087864345`,
            ` Email: support@happimoni.com with you registered phone number in the subject.`,
            `We will contact you as soon as possible`,
          ],
        },
      ],
    },
  ];

  const toggleQuestion = (groupIndex, questionIndex) => {
    const key = `${groupIndex}-${questionIndex}`;
    setOpenQuestions((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <Container>
      <div className="mt-10 px-4" id="faqs">
        <h2 className="text-3xl md:text-5xl font-semibold text-center mb-5 animate-fade-up animate-once">
          Frequently Asked Questions
        </h2>
        {faqs.map((faqGroup, groupIndex) => (
          <div key={groupIndex} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{faqGroup.group}</h2>
            <div className="space-y-4">
              {faqGroup.items.map((item, questionIndex) => (
                <div key={questionIndex} className="border-b">
                  <button
                    onClick={() => toggleQuestion(groupIndex, questionIndex)}
                    className="w-full text-left py-2 flex justify-between items-center"
                  >
                    <span className="text-lg font-medium">{item.question}</span>
                    <span>
                      {openQuestions[`${groupIndex}-${questionIndex}`] ? (
                        <Minus />
                      ) : (
                        <Plus />
                      )}
                    </span>
                  </button>
                  {openQuestions[`${groupIndex}-${questionIndex}`] && (
                    <div className="text-gray-600 pl-4 pb-4">
                      {/* Check if answer is an array, render as a list, otherwise render as text */}
                      {Array.isArray(item.answer) ? (
                        <ul className="list-disc list-inside">
                          {item.answer.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                      ) : (
                        <p>{item.answer}</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
