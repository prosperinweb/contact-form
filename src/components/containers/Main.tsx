import {
  MarketingConsent,
  MessageInput,
  Query,
  SubmitButton,
  TextInput,
} from "../views";

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
    <main>
      <h1>Contact Us</h1>
      <form>
        <TextInput type="text" label="First Name" name="first-name" />
        <TextInput type="text" label="Last Name" name="last-name" />
        <TextInput type="email" label="Email Address" name="email" />
        <Query label="Query Type" name="query-type" queries={queries} />
        <MessageInput />
        <MarketingConsent />
        <SubmitButton />
      </form>
    </main>
  );
};

export default Main;
