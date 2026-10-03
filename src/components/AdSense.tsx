type AdSenseProps = {
  pId: string;
};

const AdSense = ({ pId }: AdSenseProps) => {
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${pId}`}
      crossOrigin="anonymous"
    ></script>
  );
};

export default AdSense;
