export const incrementPageView = async (pageUrl) => {
  try {
    console.log(
      `${import.meta.env.VITE_API_URL}/api/increment-page-view => ${pageUrl}`
    );
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/increment-page-view`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ page_url: pageUrl }),
      }
    );

    if (response.ok) {
      console.log('View count successfully incremented on the backend');
      // View count successfully incremented on the backend
    } else {
      // Handle error, e.g., display an error message
      console.error('Failed to increment view count');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

export default incrementPageView;
