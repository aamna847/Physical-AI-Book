import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'f7a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'dc0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '834'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'ff9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '7b3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '0d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '589'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '222'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '9d9'),
    exact: true
  },
  {
    path: '/blog/embodied-intelligence',
    component: ComponentCreator('/blog/embodied-intelligence', '068'),
    exact: true
  },
  {
    path: '/blog/ros2-nervous-system',
    component: ComponentCreator('/blog/ros2-nervous-system', 'a66'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '20c'),
    exact: true
  },
  {
    path: '/blog/tags/ai',
    component: ComponentCreator('/blog/tags/ai', '3fc'),
    exact: true
  },
  {
    path: '/blog/tags/architecture',
    component: ComponentCreator('/blog/tags/architecture', 'b20'),
    exact: true
  },
  {
    path: '/blog/tags/communication',
    component: ComponentCreator('/blog/tags/communication', '125'),
    exact: true
  },
  {
    path: '/blog/tags/concepts',
    component: ComponentCreator('/blog/tags/concepts', 'd28'),
    exact: true
  },
  {
    path: '/blog/tags/embodied-intelligence',
    component: ComponentCreator('/blog/tags/embodied-intelligence', '1e0'),
    exact: true
  },
  {
    path: '/blog/tags/physical-ai',
    component: ComponentCreator('/blog/tags/physical-ai', 'a9c'),
    exact: true
  },
  {
    path: '/blog/tags/robotics',
    component: ComponentCreator('/blog/tags/robotics', '7e7'),
    exact: true
  },
  {
    path: '/blog/tags/ros-2',
    component: ComponentCreator('/blog/tags/ros-2', 'fcb'),
    exact: true
  },
  {
    path: '/blog/tags/welcome',
    component: ComponentCreator('/blog/tags/welcome', '538'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'e12'),
    exact: true
  },
  {
    path: '/customDocLayout',
    component: ComponentCreator('/customDocLayout', '1da'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '460'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'eac'),
        routes: [
          {
            path: '/docs/tags',
            component: ComponentCreator('/docs/tags', '0cc'),
            exact: true
          },
          {
            path: '/docs/tags/3-d',
            component: ComponentCreator('/docs/tags/3-d', 'ef8'),
            exact: true
          },
          {
            path: '/docs/tags/actuation',
            component: ComponentCreator('/docs/tags/actuation', '791'),
            exact: true
          },
          {
            path: '/docs/tags/ai',
            component: ComponentCreator('/docs/tags/ai', '91c'),
            exact: true
          },
          {
            path: '/docs/tags/architecture',
            component: ComponentCreator('/docs/tags/architecture', '44b'),
            exact: true
          },
          {
            path: '/docs/tags/bipedal',
            component: ComponentCreator('/docs/tags/bipedal', 'c80'),
            exact: true
          },
          {
            path: '/docs/tags/cameras',
            component: ComponentCreator('/docs/tags/cameras', '30b'),
            exact: true
          },
          {
            path: '/docs/tags/computer-vision',
            component: ComponentCreator('/docs/tags/computer-vision', '8c2'),
            exact: true
          },
          {
            path: '/docs/tags/configuration',
            component: ComponentCreator('/docs/tags/configuration', '8a4'),
            exact: true
          },
          {
            path: '/docs/tags/control',
            component: ComponentCreator('/docs/tags/control', 'a89'),
            exact: true
          },
          {
            path: '/docs/tags/conversational',
            component: ComponentCreator('/docs/tags/conversational', '762'),
            exact: true
          },
          {
            path: '/docs/tags/deployment',
            component: ComponentCreator('/docs/tags/deployment', 'a1e'),
            exact: true
          },
          {
            path: '/docs/tags/embodied-intelligence',
            component: ComponentCreator('/docs/tags/embodied-intelligence', '992'),
            exact: true
          },
          {
            path: '/docs/tags/gazebo',
            component: ComponentCreator('/docs/tags/gazebo', '3ce'),
            exact: true
          },
          {
            path: '/docs/tags/hardware',
            component: ComponentCreator('/docs/tags/hardware', '303'),
            exact: true
          },
          {
            path: '/docs/tags/humanoid',
            component: ComponentCreator('/docs/tags/humanoid', '1cd'),
            exact: true
          },
          {
            path: '/docs/tags/imus',
            component: ComponentCreator('/docs/tags/imus', '4e5'),
            exact: true
          },
          {
            path: '/docs/tags/integration',
            component: ComponentCreator('/docs/tags/integration', 'b38'),
            exact: true
          },
          {
            path: '/docs/tags/isaac',
            component: ComponentCreator('/docs/tags/isaac', 'ceb'),
            exact: true
          },
          {
            path: '/docs/tags/kinematics',
            component: ComponentCreator('/docs/tags/kinematics', '0c1'),
            exact: true
          },
          {
            path: '/docs/tags/launch',
            component: ComponentCreator('/docs/tags/launch', 'd58'),
            exact: true
          },
          {
            path: '/docs/tags/lidar',
            component: ComponentCreator('/docs/tags/lidar', 'd18'),
            exact: true
          },
          {
            path: '/docs/tags/locomotion',
            component: ComponentCreator('/docs/tags/locomotion', '8d7'),
            exact: true
          },
          {
            path: '/docs/tags/machine-learning',
            component: ComponentCreator('/docs/tags/machine-learning', '83a'),
            exact: true
          },
          {
            path: '/docs/tags/nav-2',
            component: ComponentCreator('/docs/tags/nav-2', '8fd'),
            exact: true
          },
          {
            path: '/docs/tags/navigation',
            component: ComponentCreator('/docs/tags/navigation', 'e27'),
            exact: true
          },
          {
            path: '/docs/tags/nlp',
            component: ComponentCreator('/docs/tags/nlp', 'e53'),
            exact: true
          },
          {
            path: '/docs/tags/nodes',
            component: ComponentCreator('/docs/tags/nodes', 'ea0'),
            exact: true
          },
          {
            path: '/docs/tags/nvidia',
            component: ComponentCreator('/docs/tags/nvidia', 'a17'),
            exact: true
          },
          {
            path: '/docs/tags/parameters',
            component: ComponentCreator('/docs/tags/parameters', 'c7d'),
            exact: true
          },
          {
            path: '/docs/tags/perception',
            component: ComponentCreator('/docs/tags/perception', 'd2e'),
            exact: true
          },
          {
            path: '/docs/tags/physical-ai',
            component: ComponentCreator('/docs/tags/physical-ai', 'b9e'),
            exact: true
          },
          {
            path: '/docs/tags/physics',
            component: ComponentCreator('/docs/tags/physics', '394'),
            exact: true
          },
          {
            path: '/docs/tags/platforms',
            component: ComponentCreator('/docs/tags/platforms', 'cc7'),
            exact: true
          },
          {
            path: '/docs/tags/reinforcement-learning',
            component: ComponentCreator('/docs/tags/reinforcement-learning', 'b9e'),
            exact: true
          },
          {
            path: '/docs/tags/requirements',
            component: ComponentCreator('/docs/tags/requirements', 'f6f'),
            exact: true
          },
          {
            path: '/docs/tags/rl',
            component: ComponentCreator('/docs/tags/rl', 'a60'),
            exact: true
          },
          {
            path: '/docs/tags/robotics',
            component: ComponentCreator('/docs/tags/robotics', '574'),
            exact: true
          },
          {
            path: '/docs/tags/robots',
            component: ComponentCreator('/docs/tags/robots', '096'),
            exact: true
          },
          {
            path: '/docs/tags/ros-2',
            component: ComponentCreator('/docs/tags/ros-2', '51a'),
            exact: true
          },
          {
            path: '/docs/tags/sdf',
            component: ComponentCreator('/docs/tags/sdf', 'bed'),
            exact: true
          },
          {
            path: '/docs/tags/sensors',
            component: ComponentCreator('/docs/tags/sensors', '46d'),
            exact: true
          },
          {
            path: '/docs/tags/services',
            component: ComponentCreator('/docs/tags/services', '2d2'),
            exact: true
          },
          {
            path: '/docs/tags/simulation',
            component: ComponentCreator('/docs/tags/simulation', 'db8'),
            exact: true
          },
          {
            path: '/docs/tags/slam',
            component: ComponentCreator('/docs/tags/slam', 'dba'),
            exact: true
          },
          {
            path: '/docs/tags/topics',
            component: ComponentCreator('/docs/tags/topics', '5c2'),
            exact: true
          },
          {
            path: '/docs/tags/unity',
            component: ComponentCreator('/docs/tags/unity', '6a5'),
            exact: true
          },
          {
            path: '/docs/tags/urdf',
            component: ComponentCreator('/docs/tags/urdf', '787'),
            exact: true
          },
          {
            path: '/docs/tags/vision-language-action',
            component: ComponentCreator('/docs/tags/vision-language-action', '7dc'),
            exact: true
          },
          {
            path: '/docs/tags/visual-slam',
            component: ComponentCreator('/docs/tags/visual-slam', '6a7'),
            exact: true
          },
          {
            path: '/docs/tags/vla',
            component: ComponentCreator('/docs/tags/vla', '766'),
            exact: true
          },
          {
            path: '/docs/tags/walking',
            component: ComponentCreator('/docs/tags/walking', '7c3'),
            exact: true
          },
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'e7a'),
            routes: [
              {
                path: '/docs/introduction',
                component: ComponentCreator('/docs/introduction', '457'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part-1-foundations/chapter-1-introduction-to-physical-ai',
                component: ComponentCreator('/docs/part-1-foundations/chapter-1-introduction-to-physical-ai', 'a82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part-1-foundations/chapter-2-sensors-perception',
                component: ComponentCreator('/docs/part-1-foundations/chapter-2-sensors-perception', '048'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part-2-nervous-system/chapter-3-ros2-architecture-core-concepts',
                component: ComponentCreator('/docs/part-2-nervous-system/chapter-3-ros2-architecture-core-concepts', 'bf5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part-2-nervous-system/chapter-4-vision-language-action-systems',
                component: ComponentCreator('/docs/part-2-nervous-system/chapter-4-vision-language-action-systems', '4d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part-2-nervous-system/chapter-5-launch-systems-parameter-management',
                component: ComponentCreator('/docs/part-2-nervous-system/chapter-5-launch-systems-parameter-management', '725'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part-2-nervous-system/chapter-6-simulation-gazebo-unity-integration',
                component: ComponentCreator('/docs/part-2-nervous-system/chapter-6-simulation-gazebo-unity-integration', '437'),
                exact: true
              },
              {
                path: '/docs/part-2-nervous-system/chapter-7-nvidia-isaac-sim-sdk',
                component: ComponentCreator('/docs/part-2-nervous-system/chapter-7-nvidia-isaac-sim-sdk', '023'),
                exact: true
              },
              {
                path: '/docs/part-3-digital-twin/chapter-6-simulation-gazebo-urdf-sdf',
                component: ComponentCreator('/docs/part-3-digital-twin/chapter-6-simulation-gazebo-urdf-sdf', '0df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part-3-digital-twin/chapter-7-physics-simulation-unity-integration',
                component: ComponentCreator('/docs/part-3-digital-twin/chapter-7-physics-simulation-unity-integration', '514'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part-4-ai-brain/chapter-10-reinforcement-learning-control',
                component: ComponentCreator('/docs/part-4-ai-brain/chapter-10-reinforcement-learning-control', 'd71'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part-4-ai-brain/chapter-6-nvidia-isaac-sim-sdk',
                component: ComponentCreator('/docs/part-4-ai-brain/chapter-6-nvidia-isaac-sim-sdk', 'f5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part-4-ai-brain/chapter-9-visual-slam-navigation',
                component: ComponentCreator('/docs/part-4-ai-brain/chapter-9-visual-slam-navigation', 'b51'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part-5-advanced-humanoids/chapter-11-humanoid-kinematics-locomotion',
                component: ComponentCreator('/docs/part-5-advanced-humanoids/chapter-11-humanoid-kinematics-locomotion', '78d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part-5-advanced-humanoids/chapter-12-vla-conversational-robotics',
                component: ComponentCreator('/docs/part-5-advanced-humanoids/chapter-12-vla-conversational-robotics', '776'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part-5-advanced-humanoids/hardware-requirements-robot-platforms',
                component: ComponentCreator('/docs/part-5-advanced-humanoids/hardware-requirements-robot-platforms', 'd3b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/search-functionality',
                component: ComponentCreator('/docs/search-functionality', '6d6'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'a07'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
