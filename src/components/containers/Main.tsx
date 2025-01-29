import Input from "../views/Input";
import MarketingConsent from "../views/MarketingConsent";
import MessageInput from "../views/MessageInput";
import QueryList from "../views/QueryList";
import SubmitButton from "../views/SubmitButton";

const Main = () => {
  const queries = [
    {
      name: "General Enquiry",
      value: "general-enquiry",
    },
    {
      name: "Product Support",
      value: "product-support",
    },
    {
      name: "Product Feedback",
      value: "product-feedback",
    },
  ];

  return (
    <main className="flex flex-col gap-4 bg-white p-6 rounded-xl mx-auto w-full max-w-xl">
      <h1 className="text-xl font-700">Contact Us</h1>
      <form className="flex flex-col gap-4">
        <div className="flex gap-4">
          <Input type="text" label="First Name" name="first-name" />
          <Input type="text" label="Last Name" name="last-name" />
        </div>
        <Input type="email" label="Email Address" name="email" />
        <QueryList label="Query Type" queries={queries} />
        <MessageInput />
      </form>
      <MarketingConsent />
      <SubmitButton />
    </main>
  );
};

export default Main;
