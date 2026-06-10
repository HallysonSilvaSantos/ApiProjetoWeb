import { DataSource } from "typeorm";
import { ProductCategory } from "../entity/ProductCategory.js";
export default class CreateProductCategorySeeds {
    async run(dataSourse) {
        console.log("Iniciando seed de categorias da TechStore...");
        const categoryRepository = dataSourse.getRepository(ProductCategory);
        const existingCount = await categoryRepository.count();
        if (existingCount) {
            console.log("Categorias já encontradas. Seed não executado novamente.");
            return;
        }
        const category = [
            { name: "Periféricos" },
            { name: "Armazenamento" },
            { name: "Monitores" }
        ];
        await categoryRepository.save(category);
        console.log("Seed finalizado: categorias da TechStore cadastradas.");
    }
}
//# sourceMappingURL=CreateProductCategorySeeds.js.map