import { ResponseModel } from "../models/ResponseModel";
import { TeamModel } from "../models/TeamModel";
import * as teamRepository from "../repositories/teamRepository";
import { HttpStatus } from "../utils/httpStatus";

export const getAllTeams = async (): Promise<ResponseModel> => {
  const teams = await teamRepository.findAllTeams();

  if (!teams) {
    return {
      statusCode: HttpStatus.NOT_FOUND,
      body: { message: "Teams Not Found" },
    };
  }

  return { statusCode: HttpStatus.OK, body: teams };
};

export const getTeamById = async (id: number): Promise<ResponseModel> => {
  const team = await teamRepository.findTeamById(id);

  if (!team) {
    return {
      statusCode: HttpStatus.NOT_FOUND,
      body: { message: "Team Not Found" },
    };
  }

  return { statusCode: HttpStatus.OK, body: team };
};

export const postTeam = async (team: TeamModel): Promise<ResponseModel> => {
  if (!team) {
    return {
      statusCode: HttpStatus.BAD_REQUEST,
      body: { message: "Invalid Team" },
    };
  }

  await teamRepository.insertTeam(team);

  return {
    statusCode: HttpStatus.CREATED,
    body: { message: "Team Created Successfully" },
  };
};

export const deleteTeam = async (id: number): Promise<ResponseModel> => {
  const hasDeleted = await teamRepository.deleteTeam(id);

  if (!hasDeleted) {
    return {
      statusCode: HttpStatus.BAD_REQUEST,
      body: { message: "Invalid Team" },
    };
  }

  return {
    statusCode: HttpStatus.OK,
    body: { message: "Team Deleted Successfully" },
  };
};

export const patchTeam = async (
  id: number,
  updates: any
): Promise<ResponseModel> => {
  const patchedTeam = await teamRepository.patchTeam(id, updates);

  if (!patchedTeam) {
    return {
      statusCode: HttpStatus.BAD_REQUEST,
      body: { message: "Invalid Team" },
    };
  }

  return {
    statusCode: HttpStatus.OK,
    body: patchedTeam,
  };
};

export const updateTeam = async (
  id: number,
  newTeam: TeamModel
): Promise<ResponseModel> => {
  const updatedTeam = await teamRepository.updateTeam(id, newTeam);

  if (!updatedTeam) {
    return {
      statusCode: HttpStatus.BAD_REQUEST,
      body: { message: "Invalid Team" },
    };
  }

  return {
    statusCode: HttpStatus.OK,
    body: updatedTeam,
  };
};
