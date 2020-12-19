import uuid

from pydantic import BaseModel, Field


class DeviceModel(BaseModel):
    id: str = Field(default_factory=uuid.uuid4, alias="_id")
    name: str = Field(...)
    type: str = Field(...)
    description: str = Field(...)

    class Config:
        allow_population_by_field_name = True
        schema_extra = {
            "example": {
                "id": "00010203-0405-0607-0809-0a0b0c0d0e0f",
                "name": "Jalapeno sensor",
                "type": "Raspberry Pi",
                "description": "Sensor attached to jalanpeno plants in greenhouse",
            }
        }
