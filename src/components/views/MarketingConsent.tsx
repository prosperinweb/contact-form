const MarketingConsent = () => {
  return (
    <div>
      <label htmlFor="marketing-consent">
        I consent to having this site store my details
        <span>*</span>
      </label>
      <input type="checkbox" name="marketing-consent" id="marketing-consent" />
    </div>
  );
};

export default MarketingConsent;
