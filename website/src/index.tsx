import React, { useEffect, useRef } from 'react';
import { FaUserFriends } from 'react-icons/fa';
import {
  FaArrowsLeftRightToLine,
  FaBookMedical,
  FaBookOpen,
  FaChartPie,
  FaClipboardList,
  FaClockRotateLeft,
  FaCloud,
  FaDatabase,
  FaEye,
  FaFileMedical,
  FaFilePen,
  FaFilter,
  FaGauge,
  FaHandHoldingMedical,
  FaHandshake,
  FaHospitalUser,
  FaIdCard,
  FaLanguage,
  FaLock,
  FaLockOpen,
  FaMagnifyingGlassChart,
  FaMobileScreen,
  FaNetworkWired,
  FaNoteSticky,
  FaPeopleGroup,
  FaServer,
  FaShieldVirus,
  FaSquarePen,
  FaStreetView,
  FaTabletScreenButton,
  FaUniversalAccess,
  FaUserDoctor,
  FaUserLock,
  FaUserNurse,
} from 'react-icons/fa6';
// icons
import { FiGithub } from 'react-icons/fi';
import { Anchor, Image } from '@theguild/components';
import clsx from 'clsx';
import { StaticImageData } from 'next/image';
import { useRouter } from 'next/router';
import logoFullSvg from 'public/logo-full.svg';
import assistantsDetailsDarkImage from 'public/screenshots/assistants_details_dark.png';
import assistantsDetailsLightImage from 'public/screenshots/assistants_details_light.png';
import caseStudiesDetailsAssignedTherapistsDarkImage from 'public/screenshots/case_studies_details_assigned_therapists_dark.png';
import caseStudiesDetailsAssignedTherapistsLightImage from 'public/screenshots/case_studies_details_assigned_therapists_light.png';
import caseStudiesDetailsDarkImage from 'public/screenshots/case_studies_details_dark.png';
import caseStudiesDetailsLightImage from 'public/screenshots/case_studies_details_light.png';
// screenshots
import clientsDarkImage from 'public/screenshots/clients_dark.png';
import clientsDetailsAssignedTherapistsDarkImage from 'public/screenshots/clients_details_assigned_therapists_dark.png';
import clientsDetailsAssignedTherapistsLightImage from 'public/screenshots/clients_details_assigned_therapists_light.png';
import clientsDetailsDarkImage from 'public/screenshots/clients_details_dark.png';
import clientsDetailsLightImage from 'public/screenshots/clients_details_light.png';
import clientsLightImage from 'public/screenshots/clients_light.png';
import conclusionDetailsDarkImage from 'public/screenshots/conclusion_details_dark.png';
import conclusionDetailsLightImage from 'public/screenshots/conclusion_details_light.png';
import desktopClientsDarkImage from 'public/screenshots/desktop_clients_dark.png';
import desktopClientsLightImage from 'public/screenshots/desktop_clients_light.png';
import formsResponseDarkImage from 'public/screenshots/forms_response_dark.png';
import formsResponseLightImage from 'public/screenshots/forms_response_light.png';
import mobileClientsDarkImage from 'public/screenshots/mobile_clients_dark.png';
import mobileClientsLightImage from 'public/screenshots/mobile_clients_light.png';
import tabletClientsDarkImage from 'public/screenshots/tablet_clients_dark.png';
import tabletClientsLightImage from 'public/screenshots/tablet_clients_light.png';
import therapistsDetailsDarkImage from 'public/screenshots/therapists_details_dark.png';
import therapistsDetailsLightImage from 'public/screenshots/therapists_details_light.png';
import treatmentsDetailsDarkImage from 'public/screenshots/treatments_details_dark.png';
import treatmentsDetailsLightImage from 'public/screenshots/treatments_details_light.png';
import { SignUpForm } from './SignUpForm';

const gradients: [string, string][] = [
  ['#f59e0b', '#d97706'], // amber
  ['#0ea5e9', '#0369a1'], // sky
  ['#8b5cf6', '#6d28d9'], // violet
  ['#ec4899', '#db2777'], // pink
  ['#06b6d4', '#0e7490'], // cyan
  ['#d946ef', '#a21caf'], // fuschia
  ['#3b82f6', '#1d4ed8'], // blue
  ['#84cc16', '#4d7c0f'], // lime
  ['#64748b', '#334155'], // slate
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
          <h1 className="w-full">
            <Image
              src={logoFullSvg}
              placeholder="empty"
              alt="heltin logo full"
              style={{ margin: '0 auto' }}
            />
          </h1>
          <p className="max-w-screen-sm mx-auto mt-6 text-2xl text-gray-800 text-center dark:text-gray-400">
            Interdisciplinary registry for a holistic view on mental health
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

        <div className="flex justify-center p-6 mx-auto sm:w-full md:w-11/12 lg:w-4/6">
          <div className="flex flex-col justify-center items-center bg-white dark:bg-black rounded-lg p-12 border dark:border-gray-800 border-gray-400">
            <h3 className="text-2xl text-center text-blue-500">
              <b>Sign Up for Early Access!</b>
            </h3>
            <br />
            <p className="text-center">
              If you wish to be an early adopter and help us with testing, or simply want to be
              notified when heltin is available, please sign up below.
            </p>
            <br />
            <br />
            <SignUpForm />
          </div>
        </div>
      </Section>

      <Section>
        <Feature gradient={0} title="The Registry">
          {({ Highlights }) => (
            <div className="flex flex-col gap-y-12">
              <p className="text-center">the only client registry you'll ever need</p>
              <div className="flex flex-col gap-y-6">
                <Highlights
                  items={[
                    {
                      icon: <FaStreetView size={28} />,
                      title: 'Holistic View',
                      description:
                        'Provide support that looks at the whole person and not only their mental health needs',
                    },
                    {
                      icon: <FaPeopleGroup size={28} />,
                      title: 'Interdisciplinary Approach',
                      description: 'Combine all branches of mental healthcare knowledge',
                    },
                    {
                      icon: <FaHandshake size={28} />,
                      title: 'Built with Professionals',
                      description:
                        'Developed together with world-renowned mental healthcare professionals',
                    },
                    {
                      link: '#therapists',
                      icon: <FaUserDoctor size={28} />,
                      title: 'Therapists',
                      description: 'Store your professional therapists, internal and/or external',
                    },
                    {
                      link: '#assistants',
                      icon: <FaUserNurse size={28} />,
                      title: 'Assistants',
                      description: 'Speed up or delegate client information management',
                    },
                    {
                      link: '#clients',
                      icon: <FaHospitalUser size={30} />,
                      title: 'Clients',
                      description: 'Store your clients with all healthcare necessities',
                    },
                    {
                      link: '#forms',
                      icon: <FaClipboardList size={28} />,
                      title: 'Custom Forms',
                      description: 'Design your own questioneers for next-gen analytics',
                    },
                    {
                      icon: <FaLanguage size={28} />,
                      title: 'Internationalization',
                      description: 'Possibility of translating and adapting to your language',
                    },
                  ]}
                />
              </div>
            </div>
          )}
        </Feature>

        <div className="w-full md:w-3/5 lg:w-4/5 px-12 mt-12 mx-auto">
          <Image
            src={clientsLightImage}
            className="dark:hidden rounded-lg border border-gray-400"
            placeholder="empty"
            alt="The Registry"
          />
          <Image
            src={clientsDarkImage}
            className="hidden dark:block rounded-lg border border-gray-800"
            placeholder="empty"
            alt="The Registry"
          />
        </div>
      </Section>

      <Section id="analytics">
        <Feature gradient={1} title="Analytics">
          {({ Highlights }) => (
            <div className="flex flex-col gap-y-12">
              <p className="text-center">next-gen analytics and overview</p>
              <div className="flex flex-col gap-y-6">
                <Highlights
                  items={[
                    {
                      icon: <FaGauge size={28} />,
                      title: 'Dashboard',
                      description: 'Quick and swift overview of your heltin',
                    },
                    {
                      icon: <FaChartPie size={28} />,
                      title: 'Graphicons',
                      description: 'Beautiful graphs with meaningful information',
                    },
                    {
                      icon: <FaMagnifyingGlassChart size={28} />,
                      title: 'Statistics',
                      description: 'Important statistics are at the grasp of your hand',
                    },
                    {
                      icon: <FaFilter size={28} />,
                      title: 'Customise',
                      description:
                        'View whats relevant to you, aggregate important information through forms',
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
          gradient={2}
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
                      description: 'The therapist can be a heltin user or not (external)',
                    },
                    {
                      icon: <FaEye size={28} />,
                      title: 'Visibility',
                      description: 'Therapists can be archived and not shown in heltin',
                    },
                    {
                      icon: <FaSquarePen size={28} />,
                      title: 'Custom Types',
                      description: "There's many types of mental healthcare professionals",
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
          gradient={3}
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
                      description: 'Only basic client information can be accessed',
                    },
                    {
                      icon: <FaUserDoctor size={28} />,
                      title: 'Assign Therapists',
                      description: 'Assistans can assign responsible therapists on request',
                    },
                    {
                      icon: <FaNoteSticky size={28} />,
                      title: 'Notes',
                      description: 'Can add notes to convey general information or requests',
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
            gradient={4}
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
                        description: 'Visible exclusively to assigned therapists, no one else',
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
                        description: "Easy overview of client's history and case studies",
                      },
                    ]}
                  />
                </div>
              </div>
            )}
          </Feature>

          <Accordion title="Read More..." gradient={4}>
            <Feature
              gradient={4}
              title="Access Control"
              titleHeading="h3"
              image={{
                light: clientsDetailsAssignedTherapistsLightImage,
                dark: clientsDetailsAssignedTherapistsDarkImage,
              }}
            >
              {({ Highlights }) => (
                <div className="flex flex-col gap-y-12">
                  <p>clear and exacty access rights built in right into the system</p>
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
          </Accordion>
        </div>
      </Section>

      <Section id="case-studies">
        <div className="flex flex-col gap-12">
          <Feature
            gradient={5}
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

          <Accordion title="Read More..." gradient={5}>
            <div className="flex flex-col gap-y-12">
              <Feature
                gradient={5}
                title="Access Control"
                titleHeading="h3"
                image={{
                  light: caseStudiesDetailsAssignedTherapistsLightImage,
                  dark: caseStudiesDetailsAssignedTherapistsDarkImage,
                }}
              >
                {({ Highlights }) => (
                  <div className="flex flex-col gap-y-12">
                    <p>clear and exacty access rights built in right into the system</p>
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
                gradient={5}
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
                gradient={5}
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
                    <p>fill out custom forms for the case study at any point in time</p>
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
                gradient={5}
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
                            description: 'Upload and attach any conclusion relevant files',
                          },
                        ]}
                      />
                    </div>
                  </div>
                )}
              </Feature>
            </div>
          </Accordion>
        </div>
      </Section>

      <Section>
        <Feature gradient={6} title="Design">
          {({ Highlights }) => (
            <div className="flex flex-col gap-y-12">
              <p className="text-center">responsive design with accessibility in mind</p>
              <div className="flex flex-col gap-y-6">
                <Highlights
                  items={[
                    {
                      icon: <FaUniversalAccess size={28} />,
                      title: 'Accessibility',
                      description:
                        'No discrimination, the complete app is optimized for accessibility',
                    },
                  ]}
                />
              </div>
            </div>
          )}
        </Feature>

        <div
          className="flex flex-wrap lg:flex-nowrap gap-12 mx-auto w-full md:w-3/5 lg:w-4/5 px-12 mt-12"
          style={{
            '--text-color': pickGradient(6)[1],
            '--dark-text-color': pickGradient(6)[0],
          }}
        >
          <div>
            <div className="flex-shrink-0 text-[--text-color] dark:text-[--dark-text-color]">
              <FaMobileScreen size={32} />
            </div>
            <div className="text-black dark:text-white mb-2">
              <h4
                className={clsx(
                  'text-xl font-semibold',
                  'text-[--text-color]',
                  'dark:text-[--dark-text-color]',
                )}
              >
                Desktop
              </h4>
              <p className={clsx('text-gray-800 dark:text-gray-400')}>
                Sitting behind a desk? No problem at all
              </p>
            </div>
            <Image
              src={desktopClientsLightImage}
              className="dark:hidden rounded-lg border border-gray-400"
              placeholder="empty"
              alt="Desktop"
            />
            <Image
              src={desktopClientsDarkImage}
              className="hidden dark:block rounded-lg border border-gray-800"
              placeholder="empty"
              alt="Desktop"
            />
          </div>

          <div>
            <div className="flex-shrink-0 text-[--text-color] dark:text-[--dark-text-color]">
              <FaTabletScreenButton size={32} />
            </div>
            <div className="text-black dark:text-white mb-2">
              <h4
                className={clsx(
                  'text-xl font-semibold',
                  'text-[--text-color]',
                  'dark:text-[--dark-text-color]',
                )}
              >
                Tablet
              </h4>
              <p className={clsx('text-gray-800 dark:text-gray-400')}>
                Lay back and work from your favourite couch
              </p>
            </div>

            <Image
              src={tabletClientsLightImage}
              className="dark:hidden rounded-lg border border-gray-400"
              placeholder="empty"
              alt="Desktop"
            />
            <Image
              src={tabletClientsDarkImage}
              className="hidden dark:block rounded-lg border border-gray-800"
              placeholder="empty"
              alt="Desktop"
            />
          </div>

          <div>
            <div className="flex-shrink-0 text-[--text-color] dark:text-[--dark-text-color]">
              <FaMobileScreen size={32} />
            </div>
            <div className="text-black dark:text-white mb-2">
              <h4
                className={clsx(
                  'text-xl font-semibold',
                  'text-[--text-color]',
                  'dark:text-[--dark-text-color]',
                )}
              >
                Mobile
              </h4>
              <p className={clsx('text-gray-800 dark:text-gray-400')}>Works on your phone too</p>
            </div>

            <Image
              src={mobileClientsLightImage}
              className="dark:hidden rounded-lg border border-gray-400"
              placeholder="empty"
              alt="Desktop"
            />
            <Image
              src={mobileClientsDarkImage}
              className="hidden dark:block rounded-lg border border-gray-800"
              placeholder="empty"
              alt="Desktop"
            />
          </div>
        </div>
      </Section>

      <Section>
        <Feature gradient={7} title="Very Secure">
          {({ Highlights }) => (
            <div className="flex flex-col gap-y-12">
              <p className="text-center">sleep with peace in mind</p>
              <div className="flex flex-col gap-y-6">
                <Highlights
                  items={[
                    {
                      icon: <FaArrowsLeftRightToLine size={28} />,
                      title: 'Transit Encryption',
                      description: 'All data in transit have a world standard encryption',
                    },
                    {
                      icon: <FaIdCard size={28} />,
                      title: 'Sessions',
                      description: "Users know exactly where they're logged in from",
                    },
                    {
                      icon: <FaDatabase size={28} />,
                      title: 'Database Backups',
                      description: 'With Point-in-Time Recovery storing data at any given time',
                    },
                    {
                      icon: <FaNetworkWired size={28} />,
                      title: 'Secure Networks',
                      description:
                        'Every service powering heltin is in a secure network and only the essentials communicate with the world',
                    },
                    {
                      icon: <FaShieldVirus size={28} />,
                      title: 'Built-in Firewalls',
                      description: 'Protecting you from all kinds of malicious attacks',
                    },
                  ]}
                />
              </div>
            </div>
          )}
        </Feature>
      </Section>

      <Section>
        {(() => {
          const [start, end] = pickGradient(8);
          return (
            <div
              className="container box-border px-6 mx-auto flex gap-24 flex-wrap md:flex-nowrap"
              style={{
                '--text-color': end,
                '--dark-text-color': start,
              }}
            >
              <div>
                <h2
                  className="font-semibold bg-clip-text text-transparent text-5xl"
                  style={{
                    backgroundImage: `linear-gradient(-70deg, var(--text-color), var(--dark-text-color))`,
                  }}
                >
                  Self-Hosted or Managed
                </h2>
                <p>
                  <b>heltin is completely open-source (MPL-2.0)</b>. Run it within your own
                  infrastructure, or use our managed service for increased security and availablity
                  anywhere on earth.
                </p>
              </div>

              <div className="flex flex-col gap-y-6">
                <div className="flex flex-row md:flex-col lg:flex-row flex-1 gap-4">
                  <div className="flex-shrink-0 text-[--text-color] dark:text-[--dark-text-color]">
                    <FaBookOpen size={28} />
                  </div>
                  <a
                    className="text-black dark:text-white"
                    href="https://github.com/bhidapa/heltin"
                  >
                    <h4
                      className={clsx(
                        'text-xl font-semibold',
                        'text-[--text-color]',
                        'dark:text-[--dark-text-color]',
                      )}
                    >
                      Open Source
                    </h4>
                    <p className={clsx('text-gray-800 dark:text-gray-400')}>
                      Built entirely in public and available to everyone. Audit it or create your
                      own open source solution based on heltin
                    </p>
                  </a>
                </div>

                <div className="flex flex-row md:flex-col lg:flex-row flex-1 gap-4">
                  <div className="flex-shrink-0 text-[--text-color] dark:text-[--dark-text-color]">
                    <FaServer size={28} />
                  </div>
                  <div className="text-black dark:text-white">
                    <h4
                      className={clsx(
                        'text-xl font-semibold',
                        'text-[--text-color]',
                        'dark:text-[--dark-text-color]',
                      )}
                    >
                      Self-Hosted
                    </h4>
                    <p className={clsx('text-gray-800 dark:text-gray-400')}>
                      heltin can run on-premises, on your own infrastructure, or in any Cloud
                      service
                    </p>
                  </div>
                </div>

                <div className="flex flex-row md:flex-col lg:flex-row flex-1 gap-4">
                  <div className="flex-shrink-0 text-[--text-color] dark:text-[--dark-text-color]">
                    <FaCloud size={28} />
                  </div>
                  <div className="text-black dark:text-white">
                    <h4
                      className={clsx(
                        'text-xl font-semibold',
                        'text-[--text-color]',
                        'dark:text-[--dark-text-color]',
                      )}
                    >
                      Managed
                    </h4>
                    <p className={clsx('text-gray-800 dark:text-gray-400')}>
                      Let us take care of the whole infrastructure with automatic updates and
                      availability guarantees
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
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
      <div id={id} className="container box-border px-6 mx-auto flex flex-col gap-y-24">
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
                            <p className={clsx('text-gray-800 dark:text-gray-400')}>
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

function Accordion({
  title,
  gradient,
  children,
}: {
  title: string;
  gradient: number;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const detailsRef = useRef<HTMLDetailsElement>();
  useEffect(() => {
    const elId = router.asPath.split('#')?.[1];
    if (!elId) {
      return;
    }
    const details = detailsRef.current;
    if (!details) {
      return;
    }
    const elForId = details.querySelector(`#${elId}`);
    if (elForId) {
      details.open = true;
      // the browser should autoscroll once opened
    }
  }, [router]);

  const [start, end] = pickGradient(gradient);

  return (
    <details ref={detailsRef} className="container box-border px-6">
      <summary
        className="px-4 py-2 rounded-lg cursor-pointer text-white drop-shadow"
        style={{
          backgroundImage: `linear-gradient(-70deg, ${start}, ${end})`,
        }}
      >
        {title}
      </summary>
      <div className="py-6">{children}</div>
    </details>
  );
}

function pickGradient(i: number) {
  const gradient = gradients[i % gradients.length];
  if (!gradient) {
    throw new Error('No gradient found');
  }
  return gradient;
}
