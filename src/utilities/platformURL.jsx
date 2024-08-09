// const selectEndpoint = () => {
//   const envMode = import.meta.env.MODE;
//   if (envMode === "development") {
//     return "https://platform-test.keywordsai.co";
//   }
//   const currentAddress = window.location.hostname;

//   if (currentAddress === "test.keywordsai.co") {
//     return "https://platform-test.keywordsai.co";
//   } else if (currentAddress === "keywordsai.co") {
//     return "https://platform.keywordsai.co";
//   }
//   return "https://platform-test.keywordsai.co";
// };
// export const platformURL = selectEndpoint();

const selectEndpoint = () => {
  if (typeof window === 'undefined') {
    // Server-side code
    return process.env.NEXT_PUBLIC_NODE_ENV === 'development'
      ? 'https://platform-test.keywordsai.co'
      : 'https://platform.keywordsai.co';
  }

  // Client-side code
  const currentAddress = window.location.hostname;

  if (process.env.NEXT_PUBLIC_NODE_ENV === 'development' || currentAddress === 'test.keywordsai.co') {
    return 'https://platform-test.keywordsai.co';
  } else if (currentAddress === 'keywordsai.co') {
    return 'https://platform.keywordsai.co';
  }

  return 'https://platform-test.keywordsai.co';
};

export const platformURL = selectEndpoint();