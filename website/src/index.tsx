import React from 'react';
import { StaticImageData } from 'next/image';
import { Anchor, Image } from '@theguild/components';
import clsx from 'clsx';
import { SignUpForm } from './SignUpForm';

// icons
import { FiGithub } from 'react-icons/fi';
import {
  FaBookMedical,
  FaClipboardList,
  FaClockRotateLeft,
  FaEye,
  FaFileMedical,
  FaFilePen,
  FaHandHoldingMedical,
  FaHospitalUser,
  FaLanguage,
  FaLock,
  FaLockOpen,
  FaNoteSticky,
  FaSquarePen,
  FaUserDoctor,
  FaUserLock,
  FaUserNurse,
} from 'react-icons/fa6';
import { FaUserFriends } from 'react-icons/fa';

// screenshots
import clientsDarkImage from 'public/screenshots/clients_dark.png';
import clientsLightImage from 'public/screenshots/clients_light.png';
import therapistsDetailsDarkImage from 'public/screenshots/therapists_details_dark.png';
import therapistsDetailsLightImage from 'public/screenshots/therapists_details_light.png';
import assistantsDetailsDarkImage from 'public/screenshots/assistants_details_dark.png';
import assistantsDetailsLightImage from 'public/screenshots/assistants_details_light.png';
import clientsDetailsDarkImage from 'public/screenshots/clients_details_dark.png';
import clientsDetailsLightImage from 'public/screenshots/clients_details_light.png';
import clientsDetailsAssignedTherapistsDarkImage from 'public/screenshots/clients_details_assigned_therapists_dark.png';
import clientsDetailsAssignedTherapistsLightImage from 'public/screenshots/clients_details_assigned_therapists_light.png';
import caseStudiesDetailsDarkImage from 'public/screenshots/case_studies_details_dark.png';
import caseStudiesDetailsLightImage from 'public/screenshots/case_studies_details_light.png';
import caseStudiesDetailsAssignedTherapistsDarkImage from 'public/screenshots/case_studies_details_assigned_therapists_dark.png';
import caseStudiesDetailsAssignedTherapistsLightImage from 'public/screenshots/case_studies_details_assigned_therapists_light.png';
import treatmentsDetailsDarkImage from 'public/screenshots/treatments_details_dark.png';
import treatmentsDetailsLightImage from 'public/screenshots/treatments_details_light.png';
import formsResponseDarkImage from 'public/screenshots/forms_response_dark.png';
import formsResponseLightImage from 'public/screenshots/forms_response_light.png';
import conclusionDetailsDarkImage from 'public/screenshots/conclusion_details_dark.png';
import conclusionDetailsLightImage from 'public/screenshots/conclusion_details_light.png';

const gradients: [string, string][] = [
  ['#f59e0b', '#d97706'], // amber
  ['#8b5cf6', '#6d28d9'], // violet
  ['#ec4899', '#db2777'], // pink
  ['#06b6d4', '#0e7490'], // cyan
  ['#d946ef', '#a21caf'], // fuschia
];

const classes = {
  button:
    'inline-block bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 text-gray-800 px-6 py-3 rounded-lg font-medium shadow-sm',
  link: 'text-primary-500',
};

export function Index() {
  return (
    <>
      <Section className="overflow-hidden">
        <div className="text-white dark:text-white py-2 bg-blue-500 origin-top float-right -mt-6 mr-6 w-72 text-center translate-x-1/3 rotate-45">
          Early Access!
        </div>
        <div className="container py-20 sm:py-24 lg:py-32">
          <h1 className="max-w-screen-md mx-auto font-extrabold text-5xl sm:text-5xl lg:text-6xl text-center bg-gradient-to-r from-blue-700 to-cyan-400 dark:from-blue-700 dark:to-cyan-400 bg-clip-text text-transparent !leading-tight">
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

        <div className="flex p-6 mx-auto sm:w-full md:w-11/12 lg:w-4/6">
          <div className="flex flex-col justify-center items-center bg-white dark:bg-black rounded-lg p-12 border dark:border-gray-800 border-gray-400">
            <h3 className="text-2xl text-center text-blue-500">
              <b>Sign Up for Early Access!</b>
            </h3>
            <br />
            <p className="text-center">
              If you wish to be an early adopter and help us with testing, or
              simply want to be notified when heltin is available, please sign
              up below.
            </p>
            <br />
            <br />
            <SignUpForm />
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
                      link: '#assistants',
                      icon: <FaUserNurse size={28} />,
                      title: 'Assistants',
                      description:
                        'Speed up or delegate client information management',
                    },
                    {
                      link: '#clients',
                      icon: <FaHospitalUser size={30} />,
                      title: 'Clients',
                      description:
                        'Store your clients with all healthcare necessities',
                    },
                    {
                      link: '#forms',
                      icon: <FaClipboardList size={28} />,
                      title: 'Custom Forms',
                      description:
                        'Design your own questioneers for next-gen analytics',
                    },
                    {
                      icon: <FaLanguage size={28} />,
                      title: 'Internationalization',
                      description:
                        'Possibility of translating and adapting to your language',
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

      <Section id="assistants">
        <Feature
          gradient={2}
          title="Assistants"
          image={{
            light: assistantsDetailsLightImage,
            dark: assistantsDetailsDarkImage,
          }}
        >
          {({ Highlights }) => (
            <div className="flex flex-col gap-y-12">
              <p>get help with client information management</p>
              <div className="flex flex-col gap-y-6">
                <Highlights
                  items={[
                    {
                      icon: <FaUserLock size={28} />,
                      title: 'Restricted View',
                      description:
                        'Only basic client information can be accessed',
                    },
                    {
                      icon: <FaUserDoctor size={28} />,
                      title: 'Assign Therapists',
                      description:
                        'Assistans can assign responsible therapists on request',
                    },
                    {
                      icon: <FaNoteSticky size={28} />,
                      title: 'Notes',
                      description:
                        'Write notes to convey general information or requests',
                    },
                  ]}
                />
              </div>
            </div>
          )}
        </Feature>
      </Section>

      <Section id="clients">
        <div className="flex flex-col gap-12">
          <Feature
            gradient={3}
            title="Clients"
            image={{
              light: clientsDetailsLightImage,
              dark: clientsDetailsDarkImage,
            }}
          >
            {({ Highlights }) => (
              <div className="flex flex-col gap-y-12">
                <p>control, manage and store all your healthcare clients</p>
                <div className="flex flex-col gap-y-6">
                  <Highlights
                    items={[
                      {
                        icon: <FaLockOpen size={28} />,
                        title: 'Access Control',
                        description:
                          'Read and edit rights are explicitly controlled and built into the system',
                      },
                      {
                        icon: <FaEye size={28} />,
                        title: 'Discrete Clients',
                        description:
                          'Visible exclusively to assigned therapists, no one else',
                      },
                      {
                        link: '#case-studies',
                        icon: <FaFileMedical size={28} />,
                        title: 'Case Studies',
                        description:
                          'Each client has one or more case studies that contain treatmens, forms and conclusions',
                      },
                      {
                        icon: <FaClockRotateLeft size={28} />,
                        title: 'History',
                        description:
                          "Easy overview of client's history and case studies",
                      },
                    ]}
                  />
                </div>
              </div>
            )}
          </Feature>

          <Feature
            flipped
            gradient={3}
            title="Access Control"
            titleHeading="h3"
            image={{
              light: clientsDetailsAssignedTherapistsLightImage,
              dark: clientsDetailsAssignedTherapistsDarkImage,
            }}
          >
            {({ Highlights }) => (
              <div className="flex flex-col gap-y-12">
                <p>
                  clear and exacty access rights built in right into the system
                </p>
                <div className="flex flex-col gap-y-6">
                  <Highlights
                    items={[
                      {
                        title: 'Administrators',
                        description: 'Have full access to the whole registry',
                      },
                      {
                        title: 'Therapists',
                        description:
                          "Can only view and manage basic information of clients to whom they're assigned",
                      },
                      {
                        title: 'Assistants',
                        description:
                          'Can view and manage basic information of all clients which are not marked as descrete',
                      },
                      {
                        title: 'Discrete',
                        description:
                          'Can only be viewed by explicitly assigned therapists and administrators',
                      },
                    ]}
                  />
                </div>
              </div>
            )}
          </Feature>
        </div>
      </Section>
      <Section id="case-studies">
        <div className="flex flex-col gap-12">
          <Feature
            gradient={4}
            title="Case Studies"
            image={{
              light: caseStudiesDetailsLightImage,
              dark: caseStudiesDetailsDarkImage,
            }}
          >
            {({ Highlights }) => (
              <div className="flex flex-col gap-y-12">
                <p>the block of services offered to a client</p>
                <div className="flex flex-col gap-y-6">
                  <Highlights
                    items={[
                      {
                        icon: <FaBookMedical size={28} />,
                        title: 'As Many as Necessary',
                        description:
                          'A client can come many times for various and different reasons; therefore, each client can have multiple case studies',
                      },
                      {
                        icon: <FaHandHoldingMedical size={28} />,
                        title: 'Treatments',
                        description:
                          'All treatmens happen within a case study and, together with other elements, create a timeline of the process',
                      },
                      {
                        icon: <FaFilePen size={28} />,
                        title: 'Forms',
                        description: 'Filled forms relate to a case study',
                      },
                      {
                        icon: <FaLock size={28} />,
                        title: 'Conclusion',
                        description:
                          'Each case study comes to an end. Once concluded, nothing inside a case study can be changed',
                      },
                    ]}
                  />
                </div>
              </div>
            )}
          </Feature>

          <Feature
            flipped
            gradient={4}
            title="Access Control"
            titleHeading="h3"
            image={{
              light: caseStudiesDetailsAssignedTherapistsLightImage,
              dark: caseStudiesDetailsAssignedTherapistsDarkImage,
            }}
          >
            {({ Highlights }) => (
              <div className="flex flex-col gap-y-12">
                <p>
                  clear and exacty access rights built in right into the system
                </p>
                <div className="flex flex-col gap-y-6">
                  <Highlights
                    items={[
                      {
                        title: 'Administrators',
                        description: 'Have full access to the whole registry',
                      },
                      {
                        title: 'Therapists',
                        description:
                          'Only assigned to the case study can read treatments, forms and the conclusion. While changes can be made exclusively by the primary therapist',
                      },
                      {
                        title: 'Assistants',
                        description: 'Can never view any case studies',
                      },
                    ]}
                  />
                </div>
              </div>
            )}
          </Feature>

          <Feature
            gradient={4}
            title="Treatments"
            titleHeading="h3"
            image={{
              light: treatmentsDetailsLightImage,
              dark: treatmentsDetailsDarkImage,
            }}
          >
            {({ Highlights }) => (
              <div className="flex flex-col gap-y-12">
                <p>happening for a client within a case study</p>
                <div className="flex flex-col gap-y-6">
                  <Highlights
                    items={[
                      {
                        title: 'Time Saver',
                        description:
                          "Write private and notes for the report, adjust treatment times. Everything's designed with efficiency in mind",
                      },
                      {
                        title: 'External',
                        description:
                          'Sometimes you send a client for external consulting or treatments. These can be added to the case study as well',
                      },
                      {
                        title: 'Report Builder',
                        description:
                          'Build official reports templated to your business for handing out to clients',
                      },
                      {
                        title: 'Files',
                        description:
                          'Upload and attach any relevant files, from drawing to historic documents',
                      },
                    ]}
                  />
                </div>
              </div>
            )}
          </Feature>

          <Feature
            flipped
            gradient={4}
            id="forms"
            title="Forms"
            titleHeading="h3"
            image={{
              light: formsResponseLightImage,
              dark: formsResponseDarkImage,
            }}
          >
            {({ Highlights }) => (
              <div className="flex flex-col gap-y-12">
                <p>
                  fill out custom forms for the case study at any point in time
                </p>
                <div className="flex flex-col gap-y-6">
                  <Highlights
                    items={[
                      {
                        title: 'Design Your Own',
                        description:
                          'Design forms and questioneers that are curated and necessary for your services',
                      },
                      {
                        title: 'Analytics',
                        description:
                          'Forms are a key element that power the analytics. Gain powerful insights relevant to mental healthcare',
                      },
                      {
                        title: 'For Therapists or For Clients',
                        description:
                          "Maybe you need questioneers that gain insights for the therapist, or maybe you want the client's anamnesis",
                      },
                      {
                        title: 'Internationalization',
                        description:
                          'Build forms in your local language, it wont impact the analytics',
                      },
                    ]}
                  />
                </div>
              </div>
            )}
          </Feature>

          <Feature
            gradient={4}
            title="Conclusion"
            titleHeading="h3"
            image={{
              light: conclusionDetailsLightImage,
              dark: conclusionDetailsDarkImage,
            }}
          >
            {({ Highlights }) => (
              <div className="flex flex-col gap-y-12">
                <p>the final step of a case study</p>
                <div className="flex flex-col gap-y-6">
                  <Highlights
                    items={[
                      {
                        title: 'Complete and Lock',
                        description:
                          'After concluding a case study, it is completed and forever locked',
                      },
                      {
                        title: 'Report Builder',
                        description:
                          'Like with treatments, conclusions need official reports too. Templated to your business for handing out to clients',
                      },
                      {
                        title: 'Files',
                        description:
                          'Upload and attach any conclusion relevant files',
                      },
                    ]}
                  />
                </div>
              </div>
            )}
          </Feature>
        </div>
      </Section>
    </>
  );
}

function Section({
  children,
  id,
  className,
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
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
        ${className}
      `}
    >
      {children}
    </section>
  );
}

function Feature({
  id,
  title,
  titleHeading = 'h2',
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
  id?: string;
  title: string;
  titleHeading?: 'h2' | 'h3';
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
      <div
        id={id}
        className="container box-border px-6 mx-auto flex flex-col gap-y-24"
      >
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
            {(() => {
              const Comp = titleHeading;
              return (
                <Comp
                  className={clsx(
                    'font-semibold bg-clip-text text-transparent',
                    titleHeading === 'h2' && 'text-5xl',
                    titleHeading === 'h3' && 'text-4xl',
                    !image && 'text-center',
                  )}
                  style={{
                    backgroundImage: `linear-gradient(-70deg, ${end}, ${start})`,
                  }}
                >
                  {title}
                </Comp>
              );
            })()}
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
                            <h4
                              className={clsx(
                                'text-xl font-semibold',
                                'text-[--text-color]',
                                'dark:text-[--dark-text-color]',
                              )}
                            >
                              {title}
                            </h4>
                            <p
                              className={clsx(
                                'text-gray-800 dark:text-gray-400',
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
          {image instanceof Object && 'light' in image ? (
            <div className="flex flex-col justify-center">
              <Image
                src={image.light}
                className="dark:hidden rounded-lg border border-gray-400"
                placeholder="empty"
                alt={title}
              />
              <Image
                src={image.dark}
                className="hidden dark:block rounded-lg border border-gray-800"
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
