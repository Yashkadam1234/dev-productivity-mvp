const developers = [
  {
    id: 1,
    name: "Amit Sharma",
    role: "Senior Software Engineer",
    team: "Platform",
    avatar: "AS"
  },
  {
    id: 2,
    name: "Neha Verma",
    role: "Software Engineer",
    team: "Frontend",
    avatar: "NV"
  },
  {
    id: 3,
    name: "Rahul Patil",
    role: "Junior Developer",
    team: "Backend",
    avatar: "RP"
  }
];

const metrics = [
  // 🔥 High Performer (Amit)
  {
    developerId: 1,
    month: "Jan",
    leadTime: 12,
    cycleTime: 8,
    bugRate: 2,
    deploymentFrequency: 25,
    prThroughput: 40
  },
  {
    developerId: 1,
    month: "Feb",
    leadTime: 10,
    cycleTime: 7,
    bugRate: 1.5,
    deploymentFrequency: 28,
    prThroughput: 45
  },
  {
    developerId: 1,
    month: "Mar",
    leadTime: 11,
    cycleTime: 8,
    bugRate: 2,
    deploymentFrequency: 30,
    prThroughput: 48
  },

  // ⚖️ Average Performer (Neha)
  {
    developerId: 2,
    month: "Jan",
    leadTime: 30,
    cycleTime: 20,
    bugRate: 6,
    deploymentFrequency: 12,
    prThroughput: 20
  },
  {
    developerId: 2,
    month: "Feb",
    leadTime: 28,
    cycleTime: 18,
    bugRate: 5,
    deploymentFrequency: 14,
    prThroughput: 22
  },
  {
    developerId: 2,
    month: "Mar",
    leadTime: 32,
    cycleTime: 22,
    bugRate: 7,
    deploymentFrequency: 10,
    prThroughput: 18
  },

  // 🚨 Struggling Developer (Rahul)
  {
    developerId: 3,
    month: "Jan",
    leadTime: 72,
    cycleTime: 50,
    bugRate: 15,
    deploymentFrequency: 5,
    prThroughput: 8
  },
  {
    developerId: 3,
    month: "Feb",
    leadTime: 80,
    cycleTime: 55,
    bugRate: 18,
    deploymentFrequency: 4,
    prThroughput: 6
  },
  {
    developerId: 3,
    month: "Mar",
    leadTime: 65,
    cycleTime: 48,
    bugRate: 14,
    deploymentFrequency: 6,
    prThroughput: 9
  }
];

export { developers, metrics };