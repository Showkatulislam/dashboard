"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const OfficialInfo = () => {
  const [Officialinfos, setOfficialInfos] = useState([]);
  const [Officialinfo, setOfficialInfo] = useState({});
  const [selectedOption, setSelectedOption] = useState("");

  const handleInputSelected = (e) => {
    setSelectedOption(e.target.value);
    console.log(selectedOption);
  };
  const handleInputField = (e) => {
    const { name, value } = e.target;
    setOfficialInfo({ ...Officialinfo, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setOfficialInfos([...Officialinfos, Officialinfo]);
  };
  return (
    <div className=" border p-3">
      <h2 className="space-y-2 py-2 text-white text-center font-semibold bg-indigo-500 rounded-sm">
        Official Information
      </h2>
      <div className=" grid grid-cols-3 gap-3">
        <div className="w-full  max-w-sm flex flex-col space-y-3 border p-3 grid-cols-1">
          <form onSubmit={handleSubmit} className="space-y-4 ">
            <div className="flex flex-col justify-center space-y-2">
              <Label htmlFor="client">Forme juridique</Label>
              <select
                className="bg-slate-900 border border-slate-600 outline-none p-1 w-full h-8"
                value={selectedOption}
                name="legalStatus"
                onChange={handleInputSelected}
              >
                <option value="Sole Proprietorship">Sole Proprietorship</option>
                <option value="Partnership">Partnership</option>
                <option value="Limited Liability Company (LLC)">
                  Limited Liability Company (LLC)
                </option>
                <option value="Corporation">Corporation</option>
                <option value="S Corporation">S Corporation</option>
                <option value="Nonprofit Corporation">
                  Nonprofit Corporation
                </option>
                <option value="Cooperative">Cooperative</option>
                <option value="Limited Partnership (LP)">
                  Limited Partnership (LP)
                </option>
                <option value="Limited Liability Partnership (LLP)">
                  Limited Liability Partnership (LLP)
                </option>
                <option value="Professional Corporation (PC) or Professional Limited Liability Company (PLLC)">
                  Professional Corporation (PC) or Professional Limited
                  Liability Company (PLLC)
                </option>
              </select>
            </div>
            <div className="flex flex-col justify-center space-y-2">
              <Label htmlFor="creation_date">Date de création</Label>
              <Input
                onChange={handleInputField}
                type="text"
                name="creation_date"
                id="creation_date"
                placeholder="Date de création"
              />
            </div>
            <div className="flex flex-col justify-center space-y-2">
              <Label htmlFor="startOfActivity">Démarrage de l&apos;activité</Label>
              <Input
                onChange={handleInputField}
                name="startOfActivity"
                type="text"
                id="startOfActivity"
                placeholder="Démarrage de l'activité"
              />
            </div>
            <div className="flex flex-col justify-center space-y-2">
              <Label htmlFor="activityStatus">Statut de l&apos;activité</Label>
              <Input
                onChange={handleInputField}
                name="activityStatus"
                type="text"
                id="activityStatus"
                placeholder="Statut de l'activité"
              />
            </div>
            <div className="flex flex-col justify-center space-y-2">
              <Label htmlFor="previousIdentifierUnqiue">
                Identifiant unique anterieur
              </Label>
              <Input
                onChange={handleInputField}
                name="previousIdentifierUnqiue"
                type="text"
                id="previousIdentifierUnqiue"
                placeholder="Identifiant unique anterieur"
              />
            </div>

            <Button type="submit" size="full">
              Add
            </Button>
          </form>
        </div>
        <div className="col-span-2">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Forme juridique</TableHead>
                <TableHead>Date de création</TableHead>
                <TableHead>Démarrage de l&apos;activité</TableHead>
                <TableHead>Statut de l&apos;activité</TableHead>
                <TableHead>Identifiant unique anterieur</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Officialinfos.map((ord) => (
                <TableRow key={ord.client}>
                  <TableCell>{ord.legalStatus}</TableCell>
                  <TableCell>{ord.creation_date}</TableCell>
                  <TableCell>{ord.startOfActivity}</TableCell>
                  <TableCell>{ord.activityStatus}</TableCell>
                  <TableCell>{ord.previousIdentifierUnqiue}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default OfficialInfo;
