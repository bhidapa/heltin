import React from 'react';
import { StaticImageData } from 'next/image';
import { Anchor, Image } from '@theguild/components';
import clsx from 'clsx';

// icons
import { FiGithub } from 'react-icons/fi';
import {
  FaClipboardList,
  FaEye,
  FaHospitalUser,
  FaSquarePen,
  FaUserDoctor,
  FaUserNurse,
} from 'react-icons/fa6';
import { FaUserFriends } from 'react-icons/fa';

// screenshots
import clientsDarkImage from 'public/screenshots/clients_dark.png';
import clientsLightImage from 'public/screenshots/clients_light.png';
import therapistsDetailsDarkImage from 'public/screenshots/therapists_details_dark.png';
import therapistsDetailsLightImage from 'public/screenshots/therapists_details_light.png';

const gradients: [string, string][] = [
  ['#8b5cf6', '#6d28d9'], // violet
  ['#06b6d4', '#0e7490'], // cyan
  ['#f59e0b', '#d97706'], // amber
  ['#ec4899', '#db2777'], // pink
];

const classes = {
  button:
    'inline-block bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 text-gray-800 px-6 py-3 rounded-lg font-medium shadow-sm',
  link: 'text-primary-500',
};

export function Index() {
  return (
    <>
      <Section>
        <div className="container py-20 sm:py-24 lg:py-32">
          <h1 className="max-w-screen-md mx-auto font-extrabold text-5xl sm:text-5xl lg:text-6xl text-center bg-gradient-to-r from-green-700 to-cyan-400 dark:from-green-700 dark:to-cyan-400 bg-clip-text text-transparent !leading-tight">
            heltin
          </h1>
          <p className="max-w-screen-sm mx-auto mt-6 text-2xl text-gray-800 text-center dark:text-gray-400">
            Robust client registry for mental healthcare services
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Anchor
              className={clsx(
                classes.button,
                'flex flex-row gap-2 items-center',
              )}
              href="https://github.com/bhidapa/heltin"
            >
              <FiGithub /> GitHub
            </Anchor>
          </div>
        </div>
      </Section>

      <Section>
        <Feature
          gradient={0}
          title="The Registry"
          image={{
            light: clientsLightImage,
            dark: clientsDarkImage,
          }}
        >
          {({ Highlights }) => (
            <div className="flex flex-col gap-y-12">
              <p>the only client registry you'll ever need</p>
              <div className="flex flex-col gap-y-6">
                <Highlights
                  items={[
                    {
                      link: '#therapists',
                      icon: <FaUserDoctor size={28} />,
                      title: 'Therapists',
                      description:
                        'Add professional therapists, internal and/or external',
                    },
                    {
                      icon: <FaUserNurse size={28} />,
                      title: 'Assistants',
                      description:
                        'Speed up or delegate client information management',
                    },
                    {
                      icon: <FaHospitalUser size={30} />,
                      title: 'Clients',
                      description:
                        'Store your clients with all healthcare necessities',
                    },
                    {
                      icon: <FaClipboardList size={28} />,
                      title: 'Custom Forms',
                      description:
                        'Design your own questioneers for next-gen analytics',
                    },
                  ]}
                />
              </div>
            </div>
          )}
        </Feature>
      </Section>

      <Section id="therapists">
        <Feature
          flipped
          gradient={1}
          title="Therapists"
          image={{
            light: therapistsDetailsLightImage,
            dark: therapistsDetailsDarkImage,
          }}
        >
          {({ Highlights }) => (
            <div className="flex flex-col gap-y-12">
              <p>manage all professionals in one place</p>
              <div className="flex flex-col gap-y-6">
                <Highlights
                  items={[
                    {
                      icon: <FaUserFriends size={28} />,
                      title: 'Internal and External',
                      description:
                        'The therapist can be a heltin user or not (external)',
                    },
                    {
                      icon: <FaEye size={28} />,
                      title: 'Visibility',
                      description:
                        'Therapists can be archived and not shown in heltin',
                    },
                    {
                      icon: <FaSquarePen size={28} />,
                      title: 'Custom Types',
                      description:
                        "There's many types of mental healthcare professionals",
                    },
                  ]}
                />
              </div>
            </div>
          )}
        </Feature>
      </Section>
    </>
  );
}

function Section({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}): React.ReactElement {
  return (
    <section
      id={id}
      className={`
        w-full py-24
        odd:bg-gray-50
        odd:dark:bg-gray-900
        even:bg-white
        even:dark:bg-black
      `}
    >
      {children}
    </section>
  );
}

function Feature({
  title,
  children,
  image,
  gradient,
  flipped,
}: {
  children: (components: {
    Highlights: React.FC<{
      items: {
        title: string;
        description: React.ReactNode;
        icon?: React.ReactNode;
        link?: string;
      }[];
    }>;
  }) => React.ReactNode;
  title: string;
  highlights?: {
    title: string;
    description: React.ReactNode;
    icon?: React.ReactNode;
  }[];
  image?:
    | React.ReactElement
    | {
        light: StaticImageData;
        dark: StaticImageData;
      };
  gradient: number;
  flipped?: boolean;
}) {
  const [start, end] = pickGradient(gradient);

  return (
    <>
      <div className="container box-border px-6 mx-auto flex flex-col gap-y-24">
        <div
          className={clsx(
            'flex flex-col gap-24 md:gap-12 lg:gap-24 justify-center items-stretch',
            flipped ? 'md:flex-row-reverse' : 'md:flex-row',
          )}
        >
          <div
            className={clsx(
              'flex flex-col w-full md:w-2/5 lg:w-2/5 flex-shrink-0',
              !image && 'items-center',
            )}
          >
            <h2
              className={clsx(
                'font-semibold text-5xl bg-clip-text text-transparent',
                !image && 'text-center',
              )}
              style={{
                backgroundImage: `linear-gradient(-70deg, ${end}, ${start})`,
              }}
            >
              {title}
            </h2>
            <div className="text-lg text-gray-800 dark:text-gray-400">
              {children?.({
                Highlights: ({ items }) => (
                  <>
                    {items.map(({ title, description, icon, link }) => {
                      const Comp = link ? Anchor : 'div';
                      return (
                        <Comp
                          key={title}
                          className="flex flex-row md:flex-col lg:flex-row flex-1 gap-4"
                          style={{
                            '--text-color': end,
                            '--dark-text-color': start,
                          }}
                          // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          {...(link && ({ href: link } as any))}
                        >
                          {icon && (
                            <div className="flex-shrink-0 text-[--text-color] dark:text-[--dark-text-color]">
                              {icon}
                            </div>
                          )}
                          <div className="text-black dark:text-white">
                            <h3
                              className={clsx(
                                'text-xl font-semibold',
                                !icon && 'text-lg',
                                'text-[--text-color]',
                                'dark:text-[--dark-text-color]',
                              )}
                            >
                              {title}
                            </h3>
                            <p
                              className={clsx(
                                'text-gray-800 dark:text-gray-400',
                                !icon && 'text-sm',
                              )}
                            >
                              {description}
                            </p>
                          </div>
                        </Comp>
                      );
                    })}
                  </>
                ),
              })}
            </div>
          </div>
          {'light' in image ? (
            <div className="flex flex-col justify-center">
              <Image
                src={image.light}
                className="dark:hidden rounded border border-gray-400"
                placeholder="empty"
                alt={title}
              />
              <Image
                src={image.dark}
                className="hidden dark:block rounded border border-gray-800"
                placeholder="empty"
                alt={title}
              />
            </div>
          ) : (
            image
          )}
        </div>
      </div>
    </>
  );
}

function pickGradient(i: number) {
  const gradient = gradients[i % gradients.length];
  if (!gradient) {
    throw new Error('No gradient found');
  }
  return gradient;
}
