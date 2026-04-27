import { ArrowDown, ArrowLeft, ArrowRight, Upload } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router";
import api from "../api/axios";

function Skill() {
  const roles: { [key: string]: string } = {
    SoftwareEngineer: "Software Engineer",
    ProductManager: "Product Manager",
    Designer: "Designer",
    QAEngineer: "QA Engineer",
  };

  const roleToSkillsKey: { [key: string]: keyof typeof skills } = {
    SoftwareEngineer: "softwareEngineer",
    "Software Engineer": "softwareEngineer",
    ProductManager: "productManager",
    "Product Manager": "productManager",
    Designer: "designer",
    QAEngineer: "qaEngineer",
    "QA Engineer": "qaEngineer",
  };

  const skills = {
    softwareEngineer: [
      "React",
      "TypeScript",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "REST APIs",
      "Testing",
      "Docker",
    ],
    productManager: [
      "Roadmap Planning",
      "Stakeholder Management",
      "User Research",
      "Data Analysis",
      "Agile Methodologies",
      "Product Strategy",
      "Market Analysis",
      "Cross-functional Collaboration",
    ],
    designer: [
      "UI/UX Design",
      "Figma",
      "Adobe Creative Suite",
      "Prototyping",
      "Design Systems",
      "User Research",
      "Typography",
      "Color Theory",
    ],
    qaEngineer: [
      "Test Automation",
      "Selenium",
      "Jest",
      "Cypress",
      "Postman",
      "Performance Testing",
      "Security Testing",
      "Bug Tracking",
    ],
  };

  const storedRole = localStorage.getItem("role") ?? "";
  const selectedSkills = roleToSkillsKey[storedRole]
    ? skills[roleToSkillsKey[storedRole]]
    : [];

  useEffect(() => {
    const fetchData = async () => {
      const personalId = localStorage.getItem("personalId");
      if (!personalId) {
        return;
      }
      try {
        const response = await api.get(`/personal/${personalId}`);
        console.log("Fetched personal data:", response.data);
        if (response.status >= 200 && response.status < 300) {
          const { role } = response.data;
          if (response.data?._id) {
            localStorage.setItem("personalId", response.data._id);
          }
          if (role && roles[role]) {
            localStorage.setItem("role", roles[role]);
          }
        }
      } catch (error) {
        console.error("Error fetching personal data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="mx-auto w-full max-w-4xl px-4 md:px-6">
      <div className="card border border-base-300 bg-base-200 shadow-xl">
        <div className="card-body p-6 md:p-8">
          <h2 className="card-title text-3xl font-bold">Skills & avatar</h2>
          <p className="mb-4 text-base-content/80">
            Upload a profile photo and select skills relevant to the role.
          </p>

          <div className="space-y-6">
            <div className="form-control">
              <label className="label" htmlFor="profilePhoto">
                <span className="label-text text-base font-semibold">
                  Profile photo <span className="text-error">*</span>
                </span>
              </label>

              <label
                htmlFor="profilePhoto"
                className="flex min-h-44 cursor-pointer flex-col items-center justify-center rounded-box border border-dashed border-primary/40 bg-base-100 p-6 text-center"
              >
                <span className="mb-4 rounded-full bg-base-300 p-3">
                  <Upload size={20} />
                </span>
                <span className="text-xl font-semibold">
                  Click to upload photo
                </span>
                <span className="text-base-content/70">
                  JPG or PNG · max 3 MB
                </span>
              </label>
              <input id="profilePhoto" type="file" className="hidden" />
            </div>

            <div>
              <div className="mb-3 flex flex-wrap items-center gap-2 text-base">
                <span className="font-semibold">
                  Skills <span className="text-error">*</span>
                </span>
                <span className="text-base-content/70">
                  - select at least 2
                </span>
              </div>

              <div className="mb-4">
                <span className="badge badge-soft badge-primary badge-lg">
                  {storedRole || "No role selected"}
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                {selectedSkills.length > 0 ? (
                  selectedSkills.map((skill) => (
                    <button
                      key={skill}
                      type="button"
                      className="btn btn-outline rounded-full"
                    >
                      {skill}
                    </button>
                  ))
                ) : (
                  <p className="text-base-content/70">
                    No skills available. Please select a role in the personal
                    information step.
                  </p>
                )}
              </div>

              <p className="mt-3 text-base-content/70">0 selected</p>
            </div>

            <div className="flex items-center justify-between pt-2">
              <Link to="/" className="btn btn-outline px-7">
                <ArrowLeft size={18} />
                Back
              </Link>

              <button type="button" className="btn btn-outline px-7">
                Next
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="flex justify-center">
              <button
                type="button"
                className="btn btn-circle btn-ghost border border-base-300"
              >
                <ArrowDown size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
