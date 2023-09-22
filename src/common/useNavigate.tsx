import { useNavigate as nav } from "react-router-dom";
import { BreadCrumbConfig } from "./commonutill";

const useNavigate = (): [
  (config: BreadCrumbConfig[], forceOverride?: boolean) => void,
  (link: string) => void,
  () => void
] => {
  const navigationFunction = nav();

  const navigate = (config: BreadCrumbConfig[], forceOverride?: boolean) => {
    const existingConfig = localStorage.getItem("breadcrumb-config");
    let existing: BreadCrumbConfig[] = [];
    if (!forceOverride && existingConfig) {
      existing = JSON.parse(existingConfig);
    }
    existing = [...existing, ...config];
    localStorage.setItem("breadcrumb-config", JSON.stringify(existing));
    navigationFunction(config[config.length - 1].link);
  };

  const goBackOneStep = () => {
    const existingConfig = localStorage.getItem("breadcrumb-config");
    let existing: BreadCrumbConfig[] = [];
    if (existingConfig) {
      existing = JSON.parse(existingConfig);
      existing.splice(existing.length - 1, 1);
      navigate(existing, true);
    }
  };

  const redirect = (link: string) => {
    navigationFunction(link);
  };

  return [navigate, redirect, goBackOneStep];
};

export default useNavigate;
