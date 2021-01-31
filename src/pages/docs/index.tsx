import React from "react";
import { RedocStandalone } from "redoc";
import Documentation from "./doc.json";

const Index: React.FC = () => <RedocStandalone spec={Documentation} />;

export default Index;
