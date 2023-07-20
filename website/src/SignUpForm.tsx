import { useState } from 'react';
import {
  FaCheck,
  FaPaperPlane,
  FaRepeat,
  FaTriangleExclamation,
} from 'react-icons/fa6';

export function SignUpForm() {
  const [state, setState] = useState<
    | null
    | 'pending'
    | { name: string; email: string } // success
    | Error
  >(null);

  if (state === 'pending') {
    return (
      <div className="w-full text-center flex flex-col items-center text-gray-400 dark:text-gray-600">
        <FaPaperPlane size={36} />
        <p>Sending...</p>
      </div>
    );
  }

  if (state instanceof Error) {
    return (
      <div className="w-full text-center flex flex-col items-center">
        <FaTriangleExclamation className="text-yellow-500" size={36} />
        <p>Oops, something went wrong!</p>
        <br />
        <pre>{state.message}</pre>
        <br />
        <button
          type="button"
          className="flex items-center justify-center w-full sm:w-auto text-white font-medium rounded px-5 py-2.5 !bg-gray-400 hover:!bg-gray-500 gap-2"
          onClick={() => setState(null)}
        >
          <FaRepeat className="inline" />
          <span>Try Again</span>
        </button>
      </div>
    );
  }

  if (state) {
    return (
      <div className="w-full text-center flex flex-col items-center">
        <FaCheck className="text-blue-700 dark:text-blue-500" size={36} />
        <p>
          Thank you, <strong>{state.name}</strong>!
          <br />
          We'll get back to you on <strong>{state.email}</strong> as soon as
          possible.
        </p>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);
        const values = {
          name: data.get('name').toString(),
          email: data.get('email').toString(),
          note: data.get('note').toString(),
        };

        setState('pending');
        fetch('https://utils.the-guild.dev/api/heltin/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        })
          .then(() => setState(values))
          .catch(setState);
      }}
    >
      <div className="flex flex-row gap-4">
        <div className="flex-1">
          <label
            htmlFor="SignUpForm_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your Name
          </label>
          <input
            id="SignUpForm_name"
            type="text"
            name="name"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          />
        </div>
        <div className="flex-1">
          <label
            htmlFor="SignUpForm_email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Email Address
          </label>
          <input
            id="SignUpForm_email"
            type="email"
            name="email"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          />
        </div>
      </div>
      <div>
        <textarea
          id="SignUpForm_note"
          name="note"
          required
          placeholder="Write down your use-case and expectations..."
          className="min-h-[120px] bg-gray-50 border border-gray-300 text-gray-900 rounded block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="flex items-center justify-center w-full sm:w-auto text-white font-medium rounded px-5 py-2.5 !bg-blue-500 hover:!bg-blue-600 dark:hover:!bg-blue-400 gap-2"
        >
          <FaPaperPlane className="inline" />
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
