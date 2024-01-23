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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const auth_schema_1 = require("./schema/auth.schema");
const mongoose_2 = require("mongoose");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(authModel, jwtService) {
        this.authModel = authModel;
        this.jwtService = jwtService;
    }
    async create(createAuthDto) {
        try {
            const { name, password, email } = createAuthDto;
            console.log('creating...', email);
            const alreadyExists = await this.authModel.findOne({ email: email });
            console.log(alreadyExists);
            if (alreadyExists) {
                console.log('exists');
                return {
                    message: 'User already exists! Please login or try a different email. ',
                };
            }
            const auth = new this.authModel();
            auth.name = name;
            auth.email = email;
            auth.password = password;
            return await auth.save();
        }
        catch (err) {
            return 'Server error';
        }
    }
    async login(createLoginDto) {
        const { email, password } = createLoginDto;
        console.log(email, password);
        const user = await this.authModel.findOne({ email: email });
        if (!user) {
            throw new common_1.UnauthorizedException('User not found! Please sign up first.');
        }
        if (user.password !== password) {
            return { message: "Invalid password! Please try again with the correct one." };
        }
        const payload = { sub: user.id, email: user.email };
        const accessToken = this.jwtService.sign(payload);
        return { access_token: accessToken };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(auth_schema_1.Auth.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map