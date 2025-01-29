const MarketingConsent = () => {
  return (
    <label
      className="flex gap-2 items-center cursor-pointer"
      htmlFor="marketing-consent"
    >
      <input type="checkbox" name="marketing-consent" id="marketing-consent" />I
      consent to having this site store my details
    </label>
  );
};

export default MarketingConsent;
