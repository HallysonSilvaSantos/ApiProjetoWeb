import { DataSource } from "typeorm";
import { Product } from "../entity/Product.js";
import { ProductSituation } from "../entity/ProductSituation.js";
import { ProductCategory } from "../entity/ProductCategory.js";
export default class CreateProductSeeds {
    async run(dataSourse) {
        console.log("Iniciando seed de produtos da TechStore...");
        const productRepository = dataSourse.getRepository(Product);
        const situationRepository = dataSourse.getRepository(ProductSituation);
        const categoryRepository = dataSourse.getRepository(ProductCategory);
        const existingCount = await productRepository.count();
        if (existingCount) {
            console.log("Produtos já encontrados. Seed não executado novamente.");
            return;
        }
        const getCategory = async (name) => {
            const category = await categoryRepository.findOne({ where: { name } });
            if (!category)
                throw new Error(`Categoria ${name} não encontrada.`);
            return category;
        };
        const getSituation = async (name) => {
            const situation = await situationRepository.findOne({ where: { name } });
            if (!situation)
                throw new Error(`Status ${name} não encontrado.`);
            return situation;
        };
        const product = [
            {
                name: "Mouse Gamer Redragon Cobra",
                slug: "mouse-gamer-redragon-cobra",
                description: "Mouse gamer RGB com sensor de alta precisão e iluminação configurável.",
                price: 129.90,
                productCategory: await getCategory("Periféricos"),
                productSituation: await getSituation("Ativo")
            },
            {
                name: "SSD Kingston 480GB",
                slug: "ssd-kingston-480gb",
                description: "SSD SATA para aumento de desempenho e velocidade do sistema.",
                price: 249.90,
                productCategory: await getCategory("Armazenamento"),
                productSituation: await getSituation("Ativo")
            },
            {
                name: "Monitor LG 24 Polegadas",
                slug: "monitor-lg-24-polegadas",
                description: "Monitor Full HD ideal para trabalho, estudos e jogos.",
                price: 899.90,
                productCategory: await getCategory("Monitores"),
                productSituation: await getSituation("Pendente")
            }
        ];
        await productRepository.save(product);
        console.log("Seed finalizado: produtos da TechStore cadastrados.");
    }
}
//# sourceMappingURL=CreateProductSeeds.js.map