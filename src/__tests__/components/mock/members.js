import { ALL_MEMBERS_QUERY } from "../../../screens";
export const navigationMock = {
  navigate: jest.fn(),
};

export const routeMock = {
  params: {
    id: 1,
  },
};
export const membersMock = [
  {
    id: "1",
    firstName: "Emmy",
    lastName: "Expo",
    title: "Business Analyst",
    experience: 13,
    avatar: "https://i.ibb.co/F8bgWpN/3-Beautiful-girl-with-a-gentle-smile.jpg",
    colleagues: [
      {
        id: "2",
        firstName: "Roman",
        lastName: "React",
        title: "Marketing Specialist",
        experience: 7,
        avatar:
          "https://i.ibb.co/YWfqZN3/anastasia-vityukova-rp-F3p-Rr-E9g-unsplash.jpg",
      },
      {
        id: "3",
        firstName: "Amir",
        lastName: "Angular",
        title: "Project Manager",
        experience: 3,
        avatar:
          "https://i.ibb.co/8DDkgz9/art-hauntington-jz-Y0-KRJop-EI-unsplash.jpg",
      },
    ],
  },
];

export const mocks = [
  {
    request: {
      query: ALL_MEMBERS_QUERY,
    },
    result: {
      data: {
        allMembers: [
          {
            id: "1",
            firstName: "Emmy",
            lastName: "Expo",
            title: "Business Analyst",
            experience: 13,
            avatar:
              "https://i.ibb.co/F8bgWpN/3-Beautiful-girl-with-a-gentle-smile.jpg",
            colleagues: [
              {
                id: "2",
                firstName: "Roman",
                lastName: "React",
                title: "Marketing Specialist",
                experience: 7,
                avatar:
                  "https://i.ibb.co/YWfqZN3/anastasia-vityukova-rp-F3p-Rr-E9g-unsplash.jpg",
              },
              {
                id: "3",
                firstName: "Amir",
                lastName: "Angular",
                title: "Project Manager",
                experience: 3,
                avatar:
                  "https://i.ibb.co/8DDkgz9/art-hauntington-jz-Y0-KRJop-EI-unsplash.jpg",
              },
            ],
          },
        ],
      },
    },
  },
];

export const mocksEmpty = [
  {
    request: {
      query: ALL_MEMBERS_QUERY,
    },
    result: {
      data: {
        allMembers: [],
      },
    },
  },
];
