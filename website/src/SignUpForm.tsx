import { useState } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { FaCheck, FaPaperPlane } from 'react-icons/fa6';

async function sendForm(name: string, email: string, note: string = '') {
  await fetch('https://utils.the-guild.dev/api/heltin/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      note,
    }),
  });
}

export function SignUpForm() {
  const [formState, setFormState] = useState<
    'idle' | 'pending' | 'success' | Error
  >('idle');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [note, setNotes] = useState('');

  if (formState instanceof Error) {
    return (
      <div className="w-full text-center flex flex-col items-center">
        <FaExclamationTriangle className="text-yellow-500" size={36} />
        <p>Oops, something went wrong!</p>
        <br />
        <pre>{formState.message}</pre>
      </div>
    );
  }

  if (formState === 'pending') {
    return (
      <div className="w-full text-center flex flex-col items-center text-gray-400 dark:text-gray-600">
        <FaPaperPlane size={36} />
        <p>Sending...</p>
      </div>
    );
  }

  if (formState === 'success') {
    return (
      <div className="w-full text-center flex flex-col items-center">
        <FaCheck className="text-teal-700 dark:text-teal-500" size={36} />
        <p>
          Thank you, <strong>{name}</strong>!
          <br />
          We'll get back to you on <strong>{email}</strong> as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();

        setFormState('pending');
        sendForm(name, email, note)
          .then(() => setFormState('success'))
          .catch(setFormState);
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            required
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
      </div>
      <div>
        <textarea
          id="SignUpForm_note"
          value={note}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Write down your use-case and expectations..."
          className="min-h-[120px] bg-gray-50 border border-gray-300 text-gray-900 rounded block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          required
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="flex items-center justify-center w-full sm:w-auto text-white font-medium rounded px-5 py-2.5 !bg-teal-700 hover:!bg-teal-800 dark:hover:!bg-teal-600 gap-2"
        >
          <FaPaperPlane className="inline" />
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
