import React from 'react';
import clsx from 'clsx';
import { FiGithub } from 'react-icons/fi';
import { Anchor } from '@theguild/components';

const classes = {
  button:
    'inline-block bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 text-gray-600 px-6 py-3 rounded-lg font-medium shadow-sm',
  link: 'text-primary-500',
};

export function Index() {
  return (
    <>
      <div className="container py-20 sm:py-24 lg:py-32">
        <h1 className="max-w-screen-md mx-auto font-extrabold text-5xl sm:text-5xl lg:text-6xl text-center bg-gradient-to-r from-green-700 to-cyan-400 dark:from-green-700 dark:to-cyan-400 bg-clip-text text-transparent !leading-tight">
          heltin
        </h1>
        <p className="max-w-screen-sm mx-auto mt-6 text-2xl text-gray-600 text-center dark:text-gray-400">
          Robust client registry for individuals receiving mental healthcare
          services
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Anchor
            className={clsx(classes.button, 'flex flex-row gap-2 items-center')}
            href="https://github.com/bhidapa/heltin"
          >
            <FiGithub /> GitHub
          </Anchor>
        </div>
      </div>
    </>
  );
}
