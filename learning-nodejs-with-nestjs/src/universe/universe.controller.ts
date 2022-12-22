import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UniverseDto } from './universe.dto';
import { UniverseService } from './universe.service';

@Controller('universe')
export class UniverseController {
  constructor(private universeService: UniverseService) {}

  @Get()
  async getAllUniverses() {
    const universes = await this.universeService.findAll();
    return universes;
  }

  @Post()
  async createOne(@Body() universe: UniverseDto) {
    const createdUniverse = await this.universeService.createOne(universe);
    return createdUniverse;
  }
}
