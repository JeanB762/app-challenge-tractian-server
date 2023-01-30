"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAssetController = void 0;
class CreateAssetController {
    constructor(createAssetUseCase) {
        this.createAssetUseCase = createAssetUseCase;
    }
    handle(request, response) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const { name, description, model, owner, status, healthlevel, companyId, unitId, responsibles, } = request.body;
            const imageFile = ((_a = request.file) === null || _a === void 0 ? void 0 : _a.filename) || '';
            yield this.createAssetUseCase.execute({
                name,
                description,
                model,
                owner,
                status,
                healthlevel,
                image: imageFile,
                companyId,
                unitId,
                responsibles,
            });
            return response.status(201).send();
        });
    }
}
exports.CreateAssetController = CreateAssetController;
