# Etapa base para el runtime
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80
ENV ConnectionStrings__cadenaSql="Server=192.168.1.4,1433;Database=Hospedaje;User Id=soporte;Password=soporte1406;TrustServerCertificate=True;"

# Etapa para construir la aplicación .NET
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["HospedajeGirardotaApi/HospedajeGirardotaApi.csproj", "HospedajeGirardotaApi/"]
RUN dotnet restore "HospedajeGirardotaApi/HospedajeGirardotaApi.csproj"
COPY . .
WORKDIR "/src/HospedajeGirardotaApi"
RUN dotnet build "HospedajeGirardotaApi.csproj" -c Release -o /app/build

# Etapa para publicar la aplicación .NET
FROM build AS publish
RUN dotnet publish "HospedajeGirardotaApi.csproj" -c Release -o /app/publish /p:UseAppHost=false

# Etapa final para el runtime
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "HospedajeGirardotaApi.dll"]
