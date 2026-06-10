import { DataSource } from "typeorm";
import { User } from "../entity/User.js";
import { Situation } from "../entity/Situation.js";
import bcrypt from "bcryptjs";

export default class CreateUserSeeds {
  public async run(dataSource: DataSource): Promise<void> {
    console.log("Iniciando seed de usuários para TechStore...");

    const userRepository = dataSource.getRepository(User);
    const situationRepository = dataSource.getRepository(Situation);

    const existingCount = await userRepository.count();

    if (existingCount > 0) {
      console.log("Usuários já encontrados. Seed não executado novamente.");
      return;
    }

    const ativo = await situationRepository.findOne({
      where: { nameSituation: "Ativo" },
    });

    const inativo = await situationRepository.findOne({
      where: { nameSituation: "Inativo" },
    });

    if (!ativo || !inativo) {
      console.log("Status necessários não encontrados. Execute o seed de Situation primeiro.");
      return;
    }

        const users = [
            {
                name: "Carlos Oliveira",
        email: "carlos@techstore.com",
        password: await bcrypt.hash("123458", 10),
        recoverPassword: null,
        situation: ativo
    },
    {
        name: "Fernanda Souza",
        email: "fernanda@techstore.com",
        password: await bcrypt.hash("123457", 10),
        recoverPassword: null,
        situation: inativo
    }
        ]

        await userRepository.save(users);

        console.log("Seed finalizado: usuários da TechStore cadastrados.")
    }
}
