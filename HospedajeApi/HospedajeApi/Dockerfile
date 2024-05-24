#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
USER app
WORKDIR /app
EXPOSE 8080
EXPOSE 8081
ENV ConnectionStrings__cadenaSql="Server=192.168.1.4,1433;Database=Hospedaje;User Id=soporte;Password=soporte1406;TrustServerCertificate=True;"

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["HospedajeApi/HospedajeApi.csproj", "HospedajeApi/"]
RUN dotnet restore "./HospedajeApi/HospedajeApi.csproj"
COPY . .
WORKDIR "/src/HospedajeApi"
RUN dotnet build "./HospedajeApi.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./HospedajeApi.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "HospedajeApi.dll"]