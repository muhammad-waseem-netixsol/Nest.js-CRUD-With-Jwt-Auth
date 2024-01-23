"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactController = void 0;
const common_1 = require("@nestjs/common");
const contact_service_1 = require("./contact.service");
const create_contact_dto_1 = require("./dto/create-contact.dto");
const update_contact_dto_1 = require("./dto/update-contact.dto");
const swagger_1 = require("@nestjs/swagger");
let ContactController = class ContactController {
    constructor(contactService) {
        this.contactService = contactService;
    }
    create(createContactDto) {
        return this.contactService.create(createContactDto);
    }
    findAll() {
        return this.contactService.findAll();
    }
    findOne(id) {
        if (!id) {
            throw new Error("Invalid id passed!");
        }
        return this.contactService.findOne(id);
    }
    update(id, updateContactDto) {
        return this.contactService.update(id, updateContactDto);
    }
    remove(id) {
        console.log("Delete =>", id);
        return this.contactService.remove(id);
    }
};
exports.ContactController = ContactController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: "ADD CONTACT" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "SUCCESSFULL" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "BAD REQUEST" }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_contact_dto_1.CreateContactDto]),
    __metadata("design:returntype", void 0)
], ContactController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: "GET ALL CONTACTS" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "SUCCESSFULL" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "BAD REQUEST" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContactController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: "GET SPECIFIC CONTACT BY PASSING AN ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "SUCCESSFULL" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "BAD REQUEST" }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContactController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: "UPDATE EXISTING CONTACT" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "SUCCESSFULL" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "BAD REQUEST" }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_contact_dto_1.UpdateContactDto]),
    __metadata("design:returntype", void 0)
], ContactController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: "DELETE A CONTACT" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "SUCCESSFULL" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "BAD REQUEST" }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContactController.prototype, "remove", null);
exports.ContactController = ContactController = __decorate([
    (0, common_1.Controller)('contact'),
    (0, swagger_1.ApiTags)("Contact CRUD"),
    __metadata("design:paramtypes", [contact_service_1.ContactService])
], ContactController);
//# sourceMappingURL=contact.controller.js.map