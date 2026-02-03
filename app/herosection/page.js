"use client";
import React from "react";
import { Flex, Splitter, Typography, Image, Space, Card, Tag } from "antd";
import {
  CodeOutlined,
  DatabaseOutlined,
  CloudOutlined,
  CreditCardOutlined,
  GithubOutlined,
  ToolOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const Hero = () => {
  const profileImg =
    "https://yryxyauqirxkozodoxdz.supabase.co/storage/v1/object/public/static-images/vimal_pk.jpg";

  const skillCategories = [
    {
      icon: <CodeOutlined style={{ fontSize: 20, color: "#1890ff" }} />,
      title: "Frontend",
      description: "Web interfaces & UI frameworks",
      skills: [
        "HTML",
        "CSS",
        "Tailwind",
        "JavaScript",
        "TypeScript",
        "React.js",
        "Next.js",
        "Ant Design",
      ],
    },
    {
      icon: <CodeOutlined style={{ fontSize: 20, color: "#52c41a" }} />,
      title: "Backend",
      description: "Server-side development",
      skills: [
        "Node.js",
        "Express.js",
        "REST API",
        "Authentication",
        "JWT",
        "OAuth",
        "WebSockets",
        "SSR",
      ],
    },
    {
      icon: <DatabaseOutlined style={{ fontSize: 20, color: "#722ed1" }} />,
      title: "Databases",
      description: "Data storage & management",
      skills: ["MySQL", "MongoDB", "Supabase DB", "Prisma ORM"],
    },
    {
      icon: <CloudOutlined style={{ fontSize: 20, color: "#fa8c16" }} />,
      title: "Cloud & Storage",
      description: "Infrastructure & deployment",
      skills: ["AWS S3", "AWS EC2", "Route53", "Elastic IP", "SSL/TLS"],
    },
    {
      icon: <CreditCardOutlined style={{ fontSize: 20, color: "#eb2f96" }} />,
      title: "Payments",
      description: "Payment integrations",
      skills: ["Razorpay"],
    },
    {
      icon: <GithubOutlined style={{ fontSize: 20, color: "#13c2c2" }} />,
      title: "Version Control",
      description: "Code management",
      skills: ["Git", "GitHub", "Bitbucket"],
    },
    {
      icon: <ToolOutlined style={{ fontSize: 20, color: "#faad14" }} />,
      title: "Tools & DevOps",
      description: "Development environment",
      skills: [
        "VS Code",
        "Postman",
        "Linux CLI",
        "MobaXterm",
        "SSH",
        "FTP",
      ],
    },
  ];

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mobile Layout
  if (isMobile) {
    return (
      <Flex
        vertical
        style={{
          minHeight: "100vh",
          background: "#f8f9fa",
        }}
      >
        {/* Profile Section */}
        <Flex
          vertical
          align="center"
          justify="center"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            padding: "40px 20px",
          }}
        >
          <Image
            src={profileImg}
            alt="Profile"
            preview={{
              mask: (
                <div style={{ fontSize: 14, fontWeight: 500 }}>
                  View
                </div>
              ),
            }}
            style={{
              width: 150,
              height: 150,
              borderRadius: "50%",
              objectFit: "cover",
              border: "5px solid rgba(255, 255, 255, 0.9)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
              marginBottom: 20,
            }}
          />
          <Title
            level={2}
            style={{
              color: "white",
              margin: 0,
              fontSize: 28,
              fontWeight: 700,
              textShadow: "0 2px 10px rgba(0,0,0,0.2)",
              textAlign: "center",
            }}
          >
            Vimal PK
          </Title>
          <Text
            style={{
              color: "rgba(255, 255, 255, 0.95)",
              fontSize: 16,
              fontWeight: 500,
              marginTop: 8,
              textAlign: "center",
            }}
          >
            Full-Stack Developer
          </Text>
        </Flex>

        {/* Skills Section */}
        <Space
          direction="vertical"
          size={16}
          style={{
            width: "100%",
            padding: "20px 16px",
          }}
        >
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              style={{
                borderRadius: 12,
                border: "1px solid #e8e8e8",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                background: "white",
              }}
              bodyStyle={{ padding: "16px" }}
            >
              <Space direction="vertical" size={12} style={{ width: "100%" }}>
                <Flex align="center" gap={10}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 8,
                      background: "linear-gradient(135deg, #f5f7fa 0%, #e9ecef 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {category.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <Title
                      level={5}
                      style={{
                        margin: 0,
                        fontSize: 16,
                        fontWeight: 600,
                        color: "#1a1a1a",
                      }}
                    >
                      {category.title}
                    </Title>
                    <Text
                      type="secondary"
                      style={{ fontSize: 12, color: "#8c8c8c" }}
                    >
                      {category.description}
                    </Text>
                  </div>
                </Flex>

                <Flex wrap="wrap" gap={6}>
                  {category.skills.map((skill, idx) => (
                    <Tag
                      key={idx}
                      style={{
                        padding: "4px 12px",
                        fontSize: 12,
                        borderRadius: 6,
                        border: "1px solid #e8e8e8",
                        background: "#fafafa",
                        color: "#595959",
                        fontWeight: 500,
                        margin: 0,
                      }}
                    >
                      {skill}
                    </Tag>
                  ))}
                </Flex>
              </Space>
            </Card>
          ))}
        </Space>
      </Flex>
    );
  }

  // Desktop Layout with Splitter
  return (
    <Splitter
      style={{
        height: "100vh",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* LEFT — IMAGE PANEL */}
      <Splitter.Panel
        defaultSize="40%"
        min="20%"
        max="70%"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 40,
        }}
      >
        <Flex
          vertical
          align="center"
          justify="center"
          style={{ width: "100%" }}
        >
          <div
            style={{
              position: "relative",
              marginBottom: 24,
            }}
          >
            <Image
              src={profileImg}
              alt="Profile"
              preview={{
                mask: (
                  <div style={{ fontSize: 14, fontWeight: 500 }}>
                    View
                  </div>
                ),
              }}
              style={{
                width: 220,
                height: 220,
                borderRadius: "50%",
                objectFit: "cover",
                border: "6px solid rgba(255, 255, 255, 0.9)",
                boxShadow: "0 15px 50px rgba(0, 0, 0, 0.3)",
              }}
            />
          </div>
          <Title
            level={2}
            style={{
              color: "white",
              margin: 0,
              fontSize: 32,
              fontWeight: 700,
              textShadow: "0 2px 10px rgba(0,0,0,0.2)",
              textAlign: "center",
            }}
          >
            Vimal PK
          </Title>
          <Text
            style={{
              color: "rgba(255, 255, 255, 0.95)",
              fontSize: 18,
              fontWeight: 500,
              marginTop: 8,
              textAlign: "center",
            }}
          >
            Full-Stack Developer
          </Text>
        </Flex>
      </Splitter.Panel>

      {/* RIGHT — CONTENT PANEL */}
      <Splitter.Panel
        style={{
          background: "#f8f9fa",
          overflowY: "auto",
          padding: "40px 50px",
        }}
      >
        <Space
          direction="vertical"
          size={24}
          style={{ width: "100%", maxWidth: 900, margin: "0 auto" }}
        >
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              hoverable
              style={{
                borderRadius: 12,
                border: "1px solid #e8e8e8",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                background: "white",
              }}
              bodyStyle={{ padding: "20px 24px" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <Space direction="vertical" size={14} style={{ width: "100%" }}>
                {/* Icon & Title */}
                <Flex align="center" gap={12}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: "linear-gradient(135deg, #f5f7fa 0%, #e9ecef 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {category.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <Title
                      level={5}
                      style={{
                        margin: 0,
                        fontSize: 17,
                        fontWeight: 600,
                        color: "#1a1a1a",
                      }}
                    >
                      {category.title}
                    </Title>
                    <Text
                      type="secondary"
                      style={{ fontSize: 13, color: "#8c8c8c" }}
                    >
                      {category.description}
                    </Text>
                  </div>
                </Flex>

                {/* Skills Tags */}
                <Flex wrap="wrap" gap={8} style={{ marginTop: 4 }}>
                  {category.skills.map((skill, idx) => (
                    <Tag
                      key={idx}
                      style={{
                        padding: "5px 14px",
                        fontSize: 13,
                        borderRadius: 6,
                        border: "1px solid #e8e8e8",
                        background: "#fafafa",
                        color: "#595959",
                        fontWeight: 500,
                        margin: 0,
                      }}
                    >
                      {skill}
                    </Tag>
                  ))}
                </Flex>
              </Space>
            </Card>
          ))}
        </Space>
      </Splitter.Panel>
    </Splitter>
  );
};

export default Hero;