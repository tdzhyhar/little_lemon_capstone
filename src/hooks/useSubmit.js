import {useState} from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (data) => {
    const random = Math.random();
    setLoading(true);
    try {
      await wait(2000);
      if (random < 0.1) {
        throw new Error("Something went wrong");
      }
      setResponse(
        {type: 'success',
        message: `You've successfully reserve a table, ${data.Name}.
        Please check your email periodically as we will send your reservation data.`,
        }
      )
    } catch (error) {
      setResponse({
        type: 'error',
        message: 'Something went wrong, please try again later!',
      })
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit};
}

export default useSubmit;